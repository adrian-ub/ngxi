import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsLocationIcon],svg[marketeq-maps-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M33.333 18.75h4.855a2.08 2.08 0 0 1 2.083 1.75l3.479 20.833a2.082 2.082 0 0 1-2.083 2.417H8.333a2.082 2.082 0 0 1-2.083-2.417L9.73 20.5a2.08 2.08 0 0 1 2.082-1.75h4.855"></svg:path><svg:path stroke="#344054" d="M33.333 14.583a8.333 8.333 0 0 0-16.666 0C16.667 22.917 25 31.25 25 31.25s8.333-8.333 8.333-16.667"></svg:path></svg:g>`,
})
export class MarketeqMapsLocationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
