import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChargespotIcon],svg[arcticons-chargespot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.969 23.276l3.206-7.227a.43.43 0 0 0-.394-.606h-8.878a.43.43 0 0 0-.418.327L17.77 26.626a.293.293 0 0 0 .285.364h4.01l-2.536 10.731c-.065.276.282.455.469.242l12.36-14.133H27.33a.394.394 0 0 1-.361-.554m1.408.554h17.122"></svg:path>`,
})
export class ArcticonsChargespotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
