import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLayoutFiveIcon],svg[icon-park-twotone-layout-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLayoutFive0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#555" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M6 16h36M6 13v6m36-6v6M17 30h25M17 16v26m-3 0h6m22-15v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLayoutFive0)"></svg:path>`,
})
export class IconParkTwotoneLayoutFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
