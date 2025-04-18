import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIpadOneIcon],svg[icon-park-twotone-ipad-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIpadOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="38" height="30" x="5" y="10" fill="#555" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 27v-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIpadOne0)"></svg:path>`,
})
export class IconParkTwotoneIpadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
