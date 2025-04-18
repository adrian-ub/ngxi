import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAlignmentRightTopIcon],svg[icon-park-solid-alignment-right-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAlignmentRightTop0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#000" d="M32 24h4m-12-6h12m-8-6h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAlignmentRightTop0)"></svg:path>`,
})
export class IconParkSolidAlignmentRightTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
