import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUcgoIcon],svg[arcticons-ucgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="11.339" d="M10.622 9.501v8.484a4.203 4.203 0 0 0 8.405 0V9.501m12.233 8.431v.052a4.203 4.203 0 0 1-8.404 0v-4.281A4.203 4.203 0 0 1 27.058 9.5h0a4.203 4.203 0 0 1 4.203 4.203v.052m-6.117 16.26a4.203 4.203 0 0 0-8.405 0v4.282a4.203 4.203 0 0 0 8.405 0h-4.202M33.175 38.5a4.203 4.203 0 0 1-4.202-4.202v-4.282a4.203 4.203 0 0 1 8.405 0v4.282a4.203 4.203 0 0 1-4.203 4.202Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsUcgoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
