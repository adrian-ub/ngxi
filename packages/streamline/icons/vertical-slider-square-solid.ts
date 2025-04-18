import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVerticalSliderSquareSolidIcon],svg[streamline-vertical-slider-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0zm2.375 5.885V11a.625.625 0 1 0 1.25 0V5.885a1.75 1.75 0 1 0-1.25 0M11.25 7.75a1.75 1.75 0 0 1-1.125 1.635V11a.625.625 0 1 1-1.25 0V9.385a1.75 1.75 0 0 1 0-3.27V3a.625.625 0 1 1 1.25 0v3.115A1.75 1.75 0 0 1 11.25 7.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVerticalSliderSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
