import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarServer2LineDuotoneIcon],svg[solar-server-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17c0-1.886 0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6s0 2.828-.586 3.414S19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M13.5 6H18M6 7V5m3 2V5m4.5 12H18M6 18v-2m3 2v-2"></svg:path></svg:g>`,
})
export class SolarServer2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
