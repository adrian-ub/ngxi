import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWidget2LineDuotoneIcon],svg[solar-widget-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"></svg:path><svg:path d="M13.5 17.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" opacity=".5"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Z"></svg:path><svg:path d="M13.5 6.5c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidget2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
