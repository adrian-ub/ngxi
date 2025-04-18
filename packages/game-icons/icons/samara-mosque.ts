import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSamaraMosqueIcon],svg[game-icons-samara-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m269 54.7l-28 4.87v34.12l28-5.7zm16.5 48.3L225 115.4v33.1l60.5-15.1zm25.5 42.5L201 173v31.1l110-18.4zm32 53.1l-174 29v46.2l174-21.7zm32 67.6l-238 29.7v59l238-23.8zm32 79.7l-302 30.2V439h302zM41 457v30h78v-30zm96 0v30h110v-30zm128 0v30h110v-30zm128 0v30h78v-30z"></svg:path>`,
})
export class GameIconsSamaraMosqueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
