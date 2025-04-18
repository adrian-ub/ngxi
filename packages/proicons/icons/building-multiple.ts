import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBuildingMultipleIcon],svg[proicons-building-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 5a1.5 1.5 0 0 0-1.5-1.5H9.288a1 1 0 0 0-1 1v1H4.75a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h10zm0 3.5h4.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4.5zm0 4h2.5m-2.5 4h2.5"></svg:path><svg:circle cx="6.75" cy="9.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="6.75" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="6.75" cy="16.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.75" cy="9.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.75" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.75" cy="16.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsBuildingMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
