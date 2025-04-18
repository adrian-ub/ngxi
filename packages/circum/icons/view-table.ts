import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumViewTableIcon],svg[circum-view-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.514 2.514 0 0 0 2.5-2.5V5.56a2.514 2.514 0 0 0-2.5-2.5M8.71 19.94H5.56a1.5 1.5 0 0 1-1.5-1.5v-3.11h4.65Zm0-5.61H4.06V9.67h4.65Zm0-5.66H4.06V5.56a1.5 1.5 0 0 1 1.5-1.5h3.15Zm11.23 9.77a1.51 1.51 0 0 1-1.5 1.5H9.71v-4.61h10.23Zm0-4.11H9.71V9.67h10.23Zm0-5.66H9.71V4.06h8.73a1.51 1.51 0 0 1 1.5 1.5Z"></svg:path>`,
})
export class CircumViewTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
