import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlashlightIcon],svg[whh-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005 885l-120 120q-19 19-46 19t-46-19L365 576H192q-26 0-45-18.5T128 512l384-383q27 0 45.5 18.5T576 192v173l429 428q19 19 19 46t-19 46M750 663L617 530q-18-18-43.5-18T530 530t-18 43.5t18 43.5l133 133q18 18 43.5 18t43.5-18t18-43.5t-18-43.5M88 433q-15 15-36.5 15T15 433T0 397t15-36L361 15q15-15 36-15t36 15t15 36.5T433 88z"></svg:path>`,
})
export class WhhFlashlightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
