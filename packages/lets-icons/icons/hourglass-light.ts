import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHourglassLightIcon],svg[lets-icons-hourglass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l6.125 4.17A2 2 0 0 1 19 17.822V20.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2.677a2 2 0 0 1 .875-1.654zm0 0l6.125-4.17A2 2 0 0 0 19 6.178V3.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v2.677a2 2 0 0 0 .875 1.654z"></svg:path><svg:path fill="currentColor" d="M16 18.777v2.073a.15.15 0 0 1-.15.15h-7.7a.15.15 0 0 1-.15-.15v-2.073a.5.5 0 0 1 .235-.424l3.341-2.088a.8.8 0 0 1 .848 0l3.341 2.088a.5.5 0 0 1 .235.424"></svg:path></svg:g>`,
})
export class LetsIconsHourglassLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
