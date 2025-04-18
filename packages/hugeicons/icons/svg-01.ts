import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSvg01Icon],svg[hugeicons-svg-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m.509 14l-1.673 4.695c-.31.87-.465 1.305-.71 1.305s-.4-.435-.71-1.305L9.242 16M20.5 17c-.09-1.018-.913-1-1.781-1c-.85 0-1.276 0-1.54.293s-.264.764-.264 1.707v2c0 .943 0 1.414.264 1.707s.69.293 1.54.293s1.275 0 1.54-.293c.264-.293.264-.764.264-1.707c0-.704-1.353-.5-1.353-.5M6.04 16H4.93c-.444 0-.666 0-.842.076c-.596.26-.588.869-.588 1.424s-.008 1.165.588 1.424c.176.076.398.076.842.076s.666 0 .841.076c.597.26.589.869.589 1.424s.008 1.165-.589 1.424C5.596 22 5.374 22 4.93 22H3.72"></svg:path></svg:g>`,
})
export class HugeiconsSvg01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
