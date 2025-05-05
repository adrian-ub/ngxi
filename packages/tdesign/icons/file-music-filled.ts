import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileMusicFilledIcon],svg[tdesign-file-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zm1.5 5h-2v4a2.5 2.5 0 1 1-2-2.45V10.5h4z"></svg:path>`,
})
export class TdesignFileMusicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
