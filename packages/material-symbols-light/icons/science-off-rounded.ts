import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScienceOffRoundedIcon],svg[material-symbols-light-science-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 11.31l-4-4V5H8.616q-.214 0-.357-.143T8.116 4.5t.143-.357T8.616 4h6.769q.213 0 .356.143t.144.357t-.144.357t-.356.143H14zm4.87 9.129L18.43 20H5q-.64 0-.909-.57t.128-1.065L9.9 11.47L3.523 5.092q-.14-.14-.15-.344t.15-.363t.354-.16t.354.16L19.577 19.73q.14.14.15.344t-.15.364t-.354.159t-.354-.16"></svg:path>`,
})
export class MaterialSymbolsLightScienceOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
