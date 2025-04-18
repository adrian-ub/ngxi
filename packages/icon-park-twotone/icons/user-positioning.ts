import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUserPositioningIcon],svg[icon-park-twotone-user-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUserPositioning0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="16" r="6" fill="#555"></svg:circle><svg:path d="M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12M36 4h8v8M12 4H4v8m32 32h8v-8m-32 8H4v-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUserPositioning0)"></svg:path>`,
})
export class IconParkTwotoneUserPositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
