import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChristmasTreeOneIcon],svg[icon-park-twotone-christmas-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChristmasTreeOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36v8"></svg:path><svg:path fill="#555" d="M14 15L24 4l10 11l-3 3l8 8l-5 1.158L42 36H6l8-8.842L9 26l8-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChristmasTreeOne0)"></svg:path>`,
})
export class IconParkTwotoneChristmasTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
