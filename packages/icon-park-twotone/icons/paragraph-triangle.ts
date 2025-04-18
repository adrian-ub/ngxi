import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneParagraphTriangleIcon],svg[icon-park-twotone-paragraph-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTParagraphTriangle0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9h18M24 19h18M6 29h36M6 39h36"></svg:path><svg:path fill="#555" d="M6 9.766a1 1 0 0 1 1.515-.857l7.056 4.233a1 1 0 0 1 0 1.716L7.515 19.09A1 1 0 0 1 6 18.234z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTParagraphTriangle0)"></svg:path>`,
})
export class IconParkTwotoneParagraphTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
