<template>
  <v-container fluid>

    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 greyDarken-4--text">Производители</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-iterator :items="brands" item-key="name" >
          
          <template v-slot:default="{ items }">
            <v-row>
              <v-col
                v-for="item in items" :key="item.name"
                cols="12" sm="6" md="6" lg="4"
              >
                <v-card flat class="rounded-lg">
                  <v-toolbar flat class="px-4">
                    <v-toolbar-title><h4 class="text-h6">{{ item.name }}</h4></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon  class="mr-0"><v-icon>mdi-dots-vertical</v-icon></v-btn> -->

                    <v-menu bottom origin="center center" transition="scale-transition">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" icon class="mr-0"><v-icon>mdi-dots-vertical</v-icon></v-btn>
                      </template>

                      
                      <v-list dense >
                        
                        <v-list-item link>
                          <v-list-item-title>Изменить</v-list-item-title>
                          <v-list-item-icon>
                            <v-icon small>mdi-pencil</v-icon>
                          </v-list-item-icon>
                        </v-list-item>
                        <v-list-item link>
                          <v-list-item-title>Удалить</v-list-item-title>
                          <v-list-item-icon  >
                            <v-icon small>mdi-delete</v-icon>
                          </v-list-item-icon>
                        </v-list-item>
                        
                        
                      </v-list>
                      
                    </v-menu>

                  </v-toolbar>

                  <v-divider></v-divider>

                  <v-card-text>
                    <div>
                      <span>Типы компонентов</span>

                      <v-container fluid class="ma-0 pa-0">
                        <v-row>
                          <v-col class="">
                            <v-chip
                              v-for="type in item.compTypes" :key="type"
                              :color="typeColor(type)"
                              small
                            >
                              <span class="text-caption">{{ type }}</span>
                            </v-chip>                           
                          </v-col>
                        </v-row>
                        
                      </v-container>

                      <!-- <div  class="d-flex flex-wrap">
                        <v-chip
                          v-for="type in item.compTypes" :key="type"
                          :color="typeColor(type)"
                          small
                        >
                          <span class="text-caption">{{ type }}</span>
                        </v-chip>
                      </div> -->

                    </div>
                  </v-card-text>
                  <!-- <v-list dense>

                    <v-list-item>
                      <v-list-item-content>Страна:</v-list-item-content>
                      <v-list-item-content class="align-start">
                        {{ item.country }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Сайт:</v-list-item-content>
                      <v-list-item-content class="align-start">
                        {{ item.site }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Типы комп-в:</v-list-item-content>
                      <v-list-item-content  class="align-start">
                        
                        <div v-for="type in item.compTypes" :key="type" class="d-flex">
                          <v-chip :color="typeColor(type)">{{ type }}</v-chip>
                        </div>
                        
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Примечания:</v-list-item-content>
                      <v-list-item-content class="align-start">
                        {{ item.notes }}
                      </v-list-item-content>
                    </v-list-item>
                    
                  </v-list> -->

                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>


      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col>
        <v-data-table :items="brands" :headers="headers"></v-data-table>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import brandsJson from '../brands.json'
  import componentTypes from '../componentTypes.json'

  export default {
    name: 'BrandsView',

    components: {
      // HelloWorld,
    },

    data(){
      return{
        headers: [
          {text: "Наименование", value: "name"},
          {text: "Страна", value: "country"},
          {text: "Сайт", value: "site"},
          {text: "Типы комп-в", value: "compTypes"},
          {text: "Примечания", value: "notes"},
        ],
        brands: brandsJson.brands,
        compTypes: componentTypes.componentTypes,
      }
    },

    methods: {
      typeColor(typeName) {
        let chipColor = 'grey lighten-2'
        for (let i = 0; i < this.compTypes.length; i++) {
          if (this.compTypes[i].name == typeName) {
            if (this.compTypes[i].color) {
              chipColor = this.compTypes[i].color
            } else chipColor = 'grey lighten-2' 
          }
        }
        return chipColor
      }
    }

  }

  
</script>
