import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLaughSquintSolidIcon],svg[la-laugh-squint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughSquintSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
