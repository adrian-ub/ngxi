import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilledIcon],svg[lsicon-sort-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .374.168l4 4.5A.5.5 0 0 1 12 7.5H4a.5.5 0 0 1-.374-.832l4-4.5A.5.5 0 0 1 8 2M3.544 8.795A.5.5 0 0 1 4 8.5h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
