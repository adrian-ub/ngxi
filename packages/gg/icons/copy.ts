import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCopyIcon],svg[gg-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 7H7V5h6zm0 4H7V9h6zm-6 4h6v-2H7z"></svg:path><svg:path fill-rule="evenodd" d="M3 19V1h14v4h4v18H7v-4zm12-2V3H5v14zm2-10v12H9v2h10V7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
