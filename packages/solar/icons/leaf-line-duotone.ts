import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLeafLineDuotoneIcon],svg[solar-leaf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5" opacity=".5"></svg:path><svg:path d="M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"></svg:path></svg:g>`,
})
export class SolarLeafLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
