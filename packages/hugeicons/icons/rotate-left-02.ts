import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft02Icon],svg[hugeicons-rotate-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.64 8.728l.497 2.623l-8.115-4.63a1.693 1.693 0 0 0-2.298.61A1.65 1.65 0 0 0 4.34 9.6l4.37 2.492l-1.039 2.683c-.686 1.724-1.029 2.585-1.017 3.337c.02 1.242.47 2.39 1.697 3.09c.854.487 1.55.605 3.385.976c1.165.236 1.748.354 2.288.312a3.87 3.87 0 0 0 2.369-1.053c.39-.371.687-.88 1.281-1.898l.505-.862c.79-1.353 1.185-2.03 1.286-2.775q.027-.2.032-.403c.02-.752-.262-1.482-.826-2.941l-1.826-4.724A1.674 1.674 0 0 0 15.03 6.79a1.654 1.654 0 0 0-1.391 1.937M8.863 4.465c.397.396 2.124.282 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.962m.328 2.962c1.021-1.768 5.081-4.589 9.11-1.768c1.946 1.363 2.22 2.222 2.529 2.797" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
