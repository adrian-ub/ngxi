import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTemplateIcon],svg[gg-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 3v6h18V3zm16 2H5v2h14zM3 11v10h8V11zm6 2H5v6h4z" clip-rule="evenodd"></svg:path><svg:path d="M21 11h-8v2h8zm-8 4h8v2h-8zm8 4h-8v2h8z"></svg:path></svg:g>`,
})
export class GgTemplateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
