import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExitToAppRoundedIcon],svg[material-symbols-light-exit-to-app-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V15.77q0-.213.143-.357t.357-.143t.357.143t.143.357v2.615q0 .231.192.424t.423.192h12.77q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616V8.23q0 .213-.143.357T4.5 8.73t-.357-.143T4 8.23V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm7.226-7.5H4.5q-.213 0-.357-.143T4 12t.143-.357t.357-.143h8.342l-2.35-2.35q-.146-.146-.153-.344t.153-.364q.166-.165.357-.168q.192-.003.357.163l2.998 2.997q.13.132.183.268t.053.298t-.052.298t-.184.268l-2.998 2.997q-.146.146-.347.153t-.367-.158q-.16-.166-.162-.354q-.003-.189.162-.354z"></svg:path>`,
})
export class MaterialSymbolsLightExitToAppRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
