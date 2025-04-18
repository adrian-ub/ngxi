import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsEnviraIcon],svg[fa6-brands-envira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32m79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2c45.2 31.2 66 73.7 90.2 119.9c31.5 60.2 79 139.7 144.2 167.7c65 28 34.2 12.5 6-8.5c-28.2-21.2-68.2-87-91-130.2c-31.7-60-61-118.6-144.2-158.1"></svg:path>`,
})
export class Fa6BrandsEnviraIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
