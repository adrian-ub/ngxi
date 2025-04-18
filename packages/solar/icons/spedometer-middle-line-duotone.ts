import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleLineDuotoneIcon],svg[solar-spedometer-middle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" opacity=".5"></svg:path><svg:path d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346c.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z"></svg:path></svg:g>`,
})
export class SolarSpedometerMiddleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
