import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2LineDuotoneIcon],svg[solar-music-note-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 18V2" opacity=".5"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
