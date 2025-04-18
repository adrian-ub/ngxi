import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGrinBeamSolidIcon],svg[la-grin-beam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinBeamSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
