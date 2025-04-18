import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siExpandLessCircleDuotoneIcon],svg[si-expand-less-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" fill-opacity=".16" stroke-miterlimit="10" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 14l4-4l4 4"></svg:path></svg:g>`,
})
export class SiExpandLessCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
