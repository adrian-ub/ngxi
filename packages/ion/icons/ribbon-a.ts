import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionRibbonAIcon],svg[ion-ribbon-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32l-82.9 176.612c39.996 3.608 75.273 23.554 99.096 53.128L432 128l-80-96z" fill="currentColor"></svg:path><svg:path d="M160 32l82.9 176.612c-39.996 3.608-75.273 23.554-99.096 53.128L80 128l80-96z" fill="currentColor"></svg:path><svg:path d="M269.092 32H176l52.572 112h54.856L336 32z" fill="currentColor"></svg:path><svg:path d="M256 224c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"></svg:path><svg:path d="M256 264c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"></svg:path>`,
})
export class IonRibbonAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
