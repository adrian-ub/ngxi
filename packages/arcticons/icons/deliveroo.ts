import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeliverooIcon],svg[arcticons-deliveroo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.92 21.93l1.9-17.43l9.72 1.01l-2.45 25.7L33.5 43.5L9.25 38.7L6.46 26.74L20.65 24L17.3 9.19l9.38-1.9z"></svg:path><svg:circle cx="30.78" cy="30.34" r="2.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.87" cy="29.19" r="2.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDeliverooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
