import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreeOneIcon],svg[icon-park-solid-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTreeOne0"><svg:g fill="none" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#fff" stroke="#fff" rx="15" ry="16"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 14v22"></svg:path><svg:path stroke="#fff" d="M30 34.669A14.15 14.15 0 0 1 24 36a14.2 14.2 0 0 1-6-1.331"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 36v8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m24 22l6-6m-6 13l-6-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTreeOne0)"></svg:path>`,
})
export class IconParkSolidTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
