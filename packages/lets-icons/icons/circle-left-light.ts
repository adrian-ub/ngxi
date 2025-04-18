import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleLeftLightIcon],svg[lets-icons-circle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m14 11l-4 4l4 4"></svg:path><svg:path stroke-linecap="round" d="M4.206 12.75C3.19 11.87 2.8 10.845 3.097 9.84c.298-1.004 1.266-1.929 2.748-2.623s3.39-1.118 5.414-1.202s4.045.178 5.735.741c1.69.564 2.948 1.396 3.572 2.363c.623.966.574 2.01-.139 2.96s-2.048 1.754-3.788 2.277s-3.784.737-5.798.607"></svg:path></svg:g>`,
})
export class LetsIconsCircleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
