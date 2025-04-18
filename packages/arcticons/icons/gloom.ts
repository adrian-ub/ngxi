import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGloomIcon],svg[arcticons-gloom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.69 23.25a13.5 13.5 0 1 1-23.38 0l9.94-17.21c.415-.717.803-1.54 1.75-1.54s1.32.797 1.749 1.54zm-19.9-6.013l3.777 3.887m3.505 3.608l3.237 3.323m-5.055-2.592v8.48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.753 36.443a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m6.794-6.599a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-6.794-6.882a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class ArcticonsGloomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
