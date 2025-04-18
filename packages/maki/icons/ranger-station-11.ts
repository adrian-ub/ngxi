import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRangerStation11Icon],svg[maki-ranger-station-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.334 0L5 1v3L1 6.055V10h3V7h3v3h3V6.055L6 4V2.25L6.334 2l1.332 1L9 2V0L7.666 1L6.334 0z" fill="currentColor"></svg:path>`,
})
export class MakiRangerStation11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
