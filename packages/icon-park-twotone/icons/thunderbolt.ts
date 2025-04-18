import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneThunderboltIcon],svg[icon-park-twotone-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTThunderbolt0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 26a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v5.36c0 .954-.683 1.781-1.52 2.238c-1.187.65-2.724 1.943-3.273 4.416C38.967 39.092 38.105 40 37 40H11c-1.105 0-1.967-.908-2.207-1.986c-.55-2.474-2.086-3.767-3.273-4.416C4.683 33.141 4 32.314 4 31.36z"></svg:path><svg:path d="M14 31h20M25 4l-6 7h10l-6 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTThunderbolt0)"></svg:path>`,
})
export class IconParkTwotoneThunderboltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
