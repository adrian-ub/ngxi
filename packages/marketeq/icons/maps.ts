import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMapsIcon],svg[marketeq-maps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m31.25 12.5l-12.5-4.167L6.25 12.5v29.167l12.5-4.167l12.5 4.167l12.5-4.167V8.333z"></svg:path><svg:path stroke="#344054" d="M31.25 41.667L18.75 37.5V8.333l12.5 4.167z"></svg:path></svg:g>`,
})
export class MarketeqMapsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
