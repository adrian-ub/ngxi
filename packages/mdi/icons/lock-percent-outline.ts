import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLockPercentOutlineIcon],svg[mdi-lock-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm9 14H6V10h12zm-7-7.5c0 .8-.7 1.5-1.5 1.5S8 13.3 8 12.5S8.7 11 9.5 11s1.5.7 1.5 1.5m5 5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m.2-5.3l-7.1 7.1l-1.4-1.4l7.1-7.1z"></svg:path>`,
})
export class MdiLockPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
