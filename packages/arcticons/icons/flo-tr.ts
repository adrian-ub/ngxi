import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFloTrIcon],svg[arcticons-flo-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.822 18.502V29.5h5.499m-13.469-5.499h3.575M12.852 29.5V18.502h5.499m13.085 10.996c-2.062 0-3.574-1.65-3.574-3.575v-3.711c0-2.062 1.65-3.712 3.574-3.712h0a3.696 3.696 0 0 1 3.712 3.712v3.574a3.696 3.696 0 0 1-3.712 3.711"></svg:path>`,
})
export class ArcticonsFloTrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
