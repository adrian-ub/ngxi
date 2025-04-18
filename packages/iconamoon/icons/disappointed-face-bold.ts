import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDisappointedFaceBoldIcon],svg[iconamoon-disappointed-face-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 15.535A4 4 0 0 1 12 15a4 4 0 0 1 2 .535m3-5.035l-3-1m-4 0l-3 1"></svg:path></svg:g>`,
})
export class IconamoonDisappointedFaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
