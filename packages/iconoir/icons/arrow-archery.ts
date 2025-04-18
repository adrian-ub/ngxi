import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowArcheryIcon],svg[iconoir-arrow-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.611 15.89l12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828zm12.02-12.02h-2.828m2.829 0v2.828"></svg:path>`,
})
export class IconoirArrowArcheryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
