import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArprandomIcon],svg[fad-arprandom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M80 123.996A4 4 0 0 1 75.996 128H52.004A4 4 0 0 1 48 123.996v-23.992A4 4 0 0 1 52.004 96h23.992A4 4 0 0 1 80 100.004zm32 80a4 4 0 0 1-4.004 4.004H84.004A4 4 0 0 1 80 203.996v-23.992A4 4 0 0 1 84.004 176h23.992a4 4 0 0 1 4.004 4.004zm96-64a4 4 0 0 1-4.004 4.004h-23.992a4 4 0 0 1-4.004-4.004v-23.992a4 4 0 0 1 4.004-4.004h23.992a4 4 0 0 1 4.004 4.004zm-96 16a4 4 0 0 0 4.004 4.004h23.992a4 4 0 0 0 4.004-4.004v-23.992a4 4 0 0 0-4.004-4.004h-23.992a4 4 0 0 0-4.004 4.004zm32-80A4 4 0 0 0 148.004 80h23.992A4 4 0 0 0 176 75.996V52.004A4 4 0 0 0 171.996 48h-23.992A4 4 0 0 0 144 52.004z"></svg:path>`,
})
export class FadArprandomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
