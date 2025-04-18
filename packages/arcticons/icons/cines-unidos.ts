import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinesUnidosIcon],svg[arcticons-cines-unidos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24M24 37.34v3.894m0-34.469v3.895m-2.648 14.17H6.824m34.352 0H26.659"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.234 24c0 9.518-7.716 17.234-17.234 17.234h0c-9.518 0-17.234-7.716-17.234-17.234h0c0-9.518 7.716-17.234 17.234-17.234h0c9.518 0 17.234 7.716 17.234 17.234"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.458 16.01l6.653-2.99v21.96"></svg:path>`,
})
export class ArcticonsCinesUnidosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
