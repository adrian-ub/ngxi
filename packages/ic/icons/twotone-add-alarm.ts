import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddAlarmIcon],svg[ic-twotone-add-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m4 8h-3v3h-2v-3H8v-2h3V9h2v3h3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7m1-11h-2v3H8v2h3v3h2v-3h3v-2h-3zm9-3.28l-4.6-3.86l-1.29 1.53l4.6 3.86zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53z"></svg:path>`,
})
export class IcTwotoneAddAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
