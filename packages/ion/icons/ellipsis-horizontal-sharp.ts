import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionEllipsisHorizontalSharpIcon],svg[ion-ellipsis-horizontal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="416" cy="256" r="48" fill="currentColor"></svg:circle><svg:circle cx="96" cy="256" r="48" fill="currentColor"></svg:circle>`,
})
export class IonEllipsisHorizontalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
