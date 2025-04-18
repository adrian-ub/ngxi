import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseLineDuotoneIcon],svg[solar-database-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 18V6m16 0v12"></svg:path><svg:path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z"></svg:path><svg:path d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4" opacity=".5"></svg:path><svg:path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path></svg:g>`,
})
export class SolarDatabaseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
