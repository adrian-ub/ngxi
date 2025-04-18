import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdOptionsIcon],svg[ion-md-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 384h272v32H32z" fill="currentColor"></svg:path><svg:path d="M400 384h80v32h-80z" fill="currentColor"></svg:path><svg:path d="M384 447.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path><svg:g><svg:path d="M32 240h80v32H32z" fill="currentColor"></svg:path><svg:path d="M208 240h272v32H208z" fill="currentColor"></svg:path><svg:path d="M192 303.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path></svg:g><svg:g><svg:path d="M32 96h272v32H32z" fill="currentColor"></svg:path><svg:path d="M400 96h80v32h-80z" fill="currentColor"></svg:path><svg:path d="M384 159.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
