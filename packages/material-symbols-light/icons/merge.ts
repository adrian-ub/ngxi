import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMergeIcon],svg[material-symbols-light-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.4 20l-.688-.688l4.69-4.697q.633-.632.865-1.165t.233-1.429V5.883L9.38 7.996l-.688-.688L12 4l3.308 3.308l-.689.688L12.5 5.883v6.138q0 .896.252 1.448t.885 1.185l4.652 4.658L17.6 20L12 14.4z"></svg:path>`,
})
export class MaterialSymbolsLightMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
