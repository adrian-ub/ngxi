import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCompareIcon],svg[mdi-file-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18H6v-2h4zm0-4H6v-2h4zm0-13v1H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4v1h2V1zm10 7v12c0 1.11-.89 2-2 2h-4v-2h4v-9h-4V9h4.5L14 4.5V2zm-4 6h-2v-2h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiFileCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
