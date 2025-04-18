import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeGrainIcon],svg[vscode-icons-file-type-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width=".406"><svg:path fill="#faa520" d="m16.056 2.024l-4.726 9.765l4.799 4.182l4.657-4.182z"></svg:path><svg:path fill="#f78f28" d="m3.213 6.863l-.367 11.773l13.28 11.34l6.664-5.834z"></svg:path><svg:path fill="#e18026" d="M29.153 18.64V6.726l-11.9 10.507l6.843 5.798z"></svg:path></svg:g>`,
})
export class VscodeIconsFileTypeGrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
