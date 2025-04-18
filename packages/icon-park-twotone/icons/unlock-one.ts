import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUnlockOneIcon],svg[icon-park-twotone-unlock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUnlockOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 12v-1a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v6m7 9v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUnlockOne0)"></svg:path>`,
})
export class IconParkTwotoneUnlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
