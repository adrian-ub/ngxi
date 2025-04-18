import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerCloudIcon],svg[hugeicons-computer-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 2h-1c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105c.68-.97.792-2.272.81-4.581"></svg:path><svg:path d="M13 6.667C13 7.955 14.007 9 15.25 9h4.725C21.093 9 22 8.06 22 6.9s-.917-2.1-2.035-2.1C20.09 3.364 18.98 2 17.5 2c-1.294 0-2.357 1.03-2.466 2.344C13.893 4.457 13 5.454 13 6.667M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
