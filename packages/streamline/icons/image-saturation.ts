import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImageSaturationIcon],svg[streamline-image-saturation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.835 11.473V4C5.84 4.902 3.85 6.615 3.85 9.081c0 1.825 1.99 2.417 2.985 2.392"></svg:path><svg:path d="M12 8.996C12 5.498 7 .5 7 .5S2 5.498 2 8.996a4.77 4.77 0 0 0 1.572 3.28C4.509 13.12 6 13.494 7 13.494s2.491-.375 3.428-1.218A4.77 4.77 0 0 0 12 8.996"></svg:path></svg:g>`,
})
export class StreamlineImageSaturationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
