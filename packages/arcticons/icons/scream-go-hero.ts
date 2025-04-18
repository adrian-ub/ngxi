import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreamGoHeroIcon],svg[arcticons-scream-go-hero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.676 16.852h-16.63v-6.69H42.5v6.69h-3.438"></svg:path><svg:path d="m16.586 19.145l-5.493 4.72L5.5 14.98l3.795.583l.338-4.955l6.413 3.434m.911-3.882a6.39 6.39 0 0 1 6.03-4.24H35.56a6.39 6.39 0 0 1 6.03 4.24"></svg:path><svg:path d="M32.677 16.852H16.586v8.49q-.109.09-.213.19l-3.032 2.932a3.185 3.185 0 0 0-.087 4.512a3.17 3.17 0 0 0 3.582.688c.177.618.442 1.2.784 1.726v3.489c0 1.773 1.418 3.2 3.18 3.2s3.18-1.427 3.18-3.2V38.3h10.587v.577c0 1.774 1.416 3.202 3.178 3.202s3.18-1.428 3.18-3.201v-3.485a6.4 6.4 0 0 0 1.036-3.495V16.852h-2.899"></svg:path><svg:path d="M32.278 18.628c.05-1.462.497-2.83 2.269-2.534l4.427.738c1.637.273 1.573 1.999 1.159 2.975c-1.905 4.49-7.968 2.16-7.855-1.18"></svg:path></svg:g>`,
})
export class ArcticonsScreamGoHeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
