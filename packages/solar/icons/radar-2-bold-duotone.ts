import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BoldDuotoneIcon],svg[solar-radar-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.126 6.823a5.249 5.249 0 1 1-3.636 2.49l.708.574A4.35 4.35 0 1 0 12 7.65a.75.75 0 0 0 0 1.5a2.85 2.85 0 1 1-2.609 1.703l2.137 1.73a.75.75 0 0 0 .944-1.166L8.274 8.019c-.561-.454-1.465-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953a.75.75 0 0 0 .25 1.478"></svg:path>`,
})
export class SolarRadar2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
