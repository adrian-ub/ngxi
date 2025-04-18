import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnchainedIcon],svg[arcticons-unchained-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.058 28.713a12.439 12.439 0 1 1-15.69-12.006M20.01 18a12.439 12.439 0 1 1 16.605 12.982M14.553 11.011l20.943 27.483M14.14 27.543l8.074-6.478"></svg:path><svg:circle cx="12.117" cy="29.003" r="2.443" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsUnchainedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
