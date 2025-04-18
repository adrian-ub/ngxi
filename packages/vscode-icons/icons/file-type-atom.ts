import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeAtomIcon],svg[vscode-icons-file-type-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width=".56"><svg:ellipse cx="16" cy="17.26" stroke="#66899a" rx="1.68" ry="12.32"></svg:ellipse><svg:ellipse cx="-9.26" cy="21.64" stroke="#e1d85d" rx="1.68" ry="12.32" transform="rotate(-66)"></svg:ellipse><svg:ellipse cx="22.28" cy="-7.6" stroke="#80a3cf" rx="1.68" ry="12.32" transform="rotate(66)"></svg:ellipse><svg:circle cx="16" cy="17.26" r="12.32" stroke="#4b541f"></svg:circle><svg:g fill="#66899a" stroke="#fff"><svg:circle cx="16" cy="17.26" r="3.64" fill="#80a3cf"></svg:circle><svg:circle cx="16" cy="4.94" r="2.52"></svg:circle><svg:circle cx="4.8" cy="22.3" r="2.52"></svg:circle><svg:circle cx="27.2" cy="22.3" r="2.52"></svg:circle></svg:g></svg:g>`,
})
export class VscodeIconsFileTypeAtomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
