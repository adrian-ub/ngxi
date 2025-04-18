import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBinocularsOutlineIcon],svg[ion-binoculars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:circle cx="392" cy="344" r="88"></svg:circle><svg:circle cx="120" cy="344" r="88"></svg:circle><svg:path d="M208 344V128c0-26.5-16-48-44-48c-35 0-46.5 21.5-57 48c0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8s48 8 48 8m-96 88s16.5-8 48-8s48 8 48 8m0 72V128c0-26.5 16-48 44-48c35 0 46.5 21.5 57 48c0 0 48.5 127.833 71 189.5"></svg:path></svg:g>`,
})
export class IonBinocularsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
