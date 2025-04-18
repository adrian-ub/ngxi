import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatColorIcon],svg[gg-format-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.948 3.21A1 1 0 0 0 12 2.632a1 1 0 0 0-.948.576l-5.917 12.69a1 1 0 1 0 1.813.845l1.45-3.111h7.203l1.451 3.111a1 1 0 0 0 1.813-.845zm1.72 8.422L12 5.909l-2.669 5.723z" clip-rule="evenodd"></svg:path><svg:path d="M6 19.368a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class GgFormatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
