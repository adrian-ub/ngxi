import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFillColorIcon],svg[iconoir-fill-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2.636 10.293l7.071-7.071l8.485 8.485l-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828m5.657-8.485l1.414 1.414"></svg:path><svg:path stroke-miterlimit="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFillColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
