import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobilfizetesIcon],svg[arcticons-mobilfizetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.405 5.114a2 2 0 0 0-1.732 1l-3.057 5.295l3.635 6.294L9.616 24l3.635 6.297l-3.635 6.295l3.057 5.295a2 2 0 0 0 1.732 1h19.5a2 2 0 0 0 1.733-1L45.388 25a2 2 0 0 0 0-2l-9.75-16.887a2 2 0 0 0-1.733-1h-19.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.25 17.704h7.27L24.155 24l-3.635 6.296h-7.27L9.616 24H2.345"></svg:path>`,
})
export class ArcticonsMobilfizetesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
