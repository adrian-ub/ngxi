import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChristmasTreeIcon],svg[icon-park-twotone-christmas-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChristmasTree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m20 14l-4-2l8-8l8 8l-4 2l8 8l-6 2l9 10H9l8-10l-5-2z"></svg:path><svg:path d="M31 44H17m4-10l-1 10m7-10l1 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChristmasTree0)"></svg:path>`,
})
export class IconParkTwotoneChristmasTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
