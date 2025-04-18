import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePreactIcon],svg[vscode-icons-file-type-preact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#673ab8" d="m16 2l12.12 7v14L16 30L3.88 23V9z"></svg:path><svg:ellipse cx="16" cy="16" fill="none" stroke="#fff" rx="10.72" ry="4.1" transform="rotate(-37.5 16.007 15.996)"></svg:ellipse><svg:ellipse cx="16" cy="16" fill="none" stroke="#fff" rx="4.1" ry="10.72" transform="rotate(-52.5 15.998 15.994)"></svg:ellipse><svg:circle cx="16" cy="16" r="1.86" fill="#fff"></svg:circle>`,
})
export class VscodeIconsFileTypePreactIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
