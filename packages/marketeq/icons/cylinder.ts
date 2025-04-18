import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCylinderIcon],svg[marketeq-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 43.75c6.904 0 12.5-1.865 12.5-4.167c0-2.3-5.596-4.166-12.5-4.166s-12.5 1.865-12.5 4.166S18.096 43.75 25 43.75"></svg:path><svg:path stroke="#306CFE" d="M37.5 10.417v29.166c0 2.292-5.604 4.167-12.5 4.167s-12.5-1.875-12.5-4.167V10.417c0-2.292 5.604-4.167 12.5-4.167s12.5 1.875 12.5 4.167"></svg:path><svg:path stroke="#344054" d="M25 14.583c6.904 0 12.5-1.865 12.5-4.166S31.904 6.25 25 6.25s-12.5 1.865-12.5 4.167c0 2.3 5.596 4.166 12.5 4.166"></svg:path></svg:g>`,
})
export class MarketeqCylinderIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
