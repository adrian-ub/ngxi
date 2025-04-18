import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMemoryCardIcon],svg[icon-park-twotone-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMemoryCard0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 40H8a2 2 0 0 1-2-2V19.106a2 2 0 0 1 .336-1.11l6.07-9.105A2 2 0 0 1 14.07 8H40a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2M18 16V8m6 8V8m6 8V8m6 8V8"></svg:path><svg:path fill="#555" d="M15 28h18v12H15z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMemoryCard0)"></svg:path>`,
})
export class IconParkTwotoneMemoryCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
