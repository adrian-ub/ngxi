import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParkrunVirtualVolunteerIcon],svg[arcticons-parkrun-virtual-volunteer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.155 36.459a6.816 6.816 0 0 1 6.82-6.814M27.13 43.5V18.558m-3.97 10.979c-.707.2-1.454.306-2.226.306c-4.518 0-8.18-3.66-8.18-8.174s3.887-8.145 8.405-8.145m0 0A7.162 7.162 0 0 1 28.08 4.5a7.162 7.162 0 0 1 7.054 8.423"></svg:path>`,
})
export class ArcticonsParkrunVirtualVolunteerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
