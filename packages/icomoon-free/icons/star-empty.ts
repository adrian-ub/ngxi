import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeStarEmptyIcon],svg[icomoon-free-star-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.204l-5.528-.803L8 .392L5.528 5.401L0 6.204l4 3.899l-.944 5.505L8 13.009l4.944 2.599L12 10.103zm-8 5.569l-3.492 1.836l.667-3.888L2.35 6.968l3.904-.567L8 2.864l1.746 3.537l3.904.567l-2.825 2.753l.667 3.888z"></svg:path>`,
})
export class IcomoonFreeStarEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
