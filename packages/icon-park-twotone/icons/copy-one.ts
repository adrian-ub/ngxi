import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCopyOneIcon],svg[icon-park-twotone-copy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCopyOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M13 38h28V16H30V4H13z"></svg:path><svg:path stroke-linejoin="round" d="m30 4l11 12M7 20v24h21"></svg:path><svg:path d="M19 20h4m-4 8h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCopyOne0)"></svg:path>`,
})
export class IconParkTwotoneCopyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
