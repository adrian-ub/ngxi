import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBackUpDoubleIcon],svg[tabler-arrow-back-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 14l-4-4l4-4m-5 8l-4-4l4-4"></svg:path><svg:path d="M9 10h7a4 4 0 1 1 0 8h-1"></svg:path></svg:g>`,
})
export class TablerArrowBackUpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
