import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSdIcon],svg[icon-park-twotone-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSd0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M15.402 5.683A2 2 0 0 1 16.907 5H37a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V24h4v-6H9v-5z"></svg:path><svg:path d="M33 11v4m-12-4v4m6-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSd0)"></svg:path>`,
})
export class IconParkTwotoneSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
