import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentAdd48FilledIcon],svg[fluent-document-add-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H23.248A12.94 12.94 0 0 0 26 35c0-7.18-5.82-13-13-13c-1.772 0-3.46.355-5 .996V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.712zM24 35c0 6.075-4.925 11-11 11S2 41.075 2 35s4.925-11 11-11s11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"></svg:path>`,
})
export class FluentDocumentAdd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
