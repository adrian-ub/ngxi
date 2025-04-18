import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLiftoffIcon],svg[arcticons-liftoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M23.968 43.5c.482 0 4.355-2.488 4.355-6.953h-8.71c0 4.465 3.872 6.953 4.355 6.953m-8.306-23.327c-.717 0-6.474 4.652-6.474 7.29v10.501c1.5-1.5 6.474-4.066 6.474-4.066zm16.676 0c.717 0 6.474 4.652 6.474 7.29v10.501c-1.5-1.5-6.474-4.066-6.474-4.066z"></svg:path><svg:path d="M29.943 10.152C28.423 7.912 26.473 5.664 24 4.5c-.924 0-8.338 5.465-8.338 13.312v16.086c5.675 0 10.975.15 16.676 0V17.812"></svg:path><svg:circle cx="23.769" cy="19.13" r="4.137"></svg:circle></svg:g>`,
})
export class ArcticonsLiftoffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
