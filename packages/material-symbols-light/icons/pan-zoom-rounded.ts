import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPanZoomRoundedIcon],svg[material-symbols-light-pan-zoom-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.708 19H8.5q.213 0 .356.144t.144.357t-.144.356T8.5 20H4.808q-.343 0-.576-.232T4 19.192V15.5q0-.213.144-.356T4.501 15t.356.144T5 15.5v2.792l3.246-3.246q.14-.14.344-.15t.364.15t.16.354t-.16.354zM19 5.708l-3.246 3.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L18.292 5H15.5q-.213 0-.356-.144T15 4.499t.144-.356T15.5 4h3.692q.344 0 .576.232t.232.576V8.5q0 .213-.144.356T19.499 9t-.356-.144T19 8.5z"></svg:path>`,
})
export class MaterialSymbolsLightPanZoomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
