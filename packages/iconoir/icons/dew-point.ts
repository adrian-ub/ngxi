import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDewPointIcon],svg[iconoir-dew-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2"></svg:path><svg:path d="M8 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V9"></svg:path><svg:path stroke-miterlimit="1.5" d="M19 3s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C16.01 5.992 19 3 19 3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirDewPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
