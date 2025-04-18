import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTreeOneIcon],svg[icon-park-outline-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:ellipse cx="24" cy="20" rx="15" ry="16"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 14v22"></svg:path><svg:path d="M30 34.669A14.15 14.15 0 0 1 24 36a14.2 14.2 0 0 1-6-1.331"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36v8m0-22l6-6m-6 13l-6-6"></svg:path></svg:g>`,
})
export class IconParkOutlineTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
