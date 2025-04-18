import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCloudDuotoneIcon],svg[si-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" clip-rule="evenodd"><svg:path fill="currentColor" fill-opacity=".16" fill-rule="evenodd" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4a5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z"></svg:path></svg:g>`,
})
export class SiCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
