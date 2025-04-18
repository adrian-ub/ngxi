import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrinoxIcon],svg[arcticons-urinox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.543 18.204a1.792 1.792 0 0 1 2.482-2.585l8.615 8.275a1.792 1.792 0 0 1-2.482 2.584L18.578 41.66a5.973 5.973 0 1 1-8.625-8.264l.01-.01Z"></svg:path><svg:circle cx="36.53" cy="14.297" r="3.178" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.422" cy="6.747" r="2.247" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.808 20.01l3.74 3.593m-7.736.567l3.74 3.592m-7.735.568l3.74 3.592m-7.736.568l3.74 3.592"></svg:path>`,
})
export class ArcticonsUrinoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
