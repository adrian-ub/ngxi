import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirIndustryIcon],svg[iconoir-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2m7 19h3v-9h-3v4.5m0 4.5v-4.5m0 4.5H3v-4l3.5-3l4 2.5l4-2.5l3.5 2.5m3-6.5c0-6-4-6-4-6s4 .5 4-2"></svg:path>`,
})
export class IconoirIndustryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
