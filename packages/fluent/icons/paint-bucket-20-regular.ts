import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBucket20RegularIcon],svg[fluent-paint-bucket-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.5a.5.5 0 0 0-1 0V4c-.205.072-.397.19-.56.354L2.353 9.439a1.5 1.5 0 0 0 0 2.122l4.335 4.335a1.5 1.5 0 0 0 2.122 0l5.085-5.085a1.5 1.5 0 0 0 0-2.122L9.561 4.354A1.5 1.5 0 0 0 9 4zM8 5.207V6.5a.5.5 0 0 0 1 0V5.207l4.19 4.19a.5.5 0 0 1 .079.603H3.207zm-.604 9.982L3.207 11h9.086l-4.19 4.19a.5.5 0 0 1-.707 0m8.62-3.797a.597.597 0 0 0-1.032 0l-1.652 2.833C12.355 15.898 13.562 18 15.5 18c1.937 0 3.145-2.102 2.168-3.775zm-1.82 3.337l1.304-2.237l1.305 2.237a1.51 1.51 0 1 1-2.61 0"></svg:path>`,
})
export class FluentPaintBucket20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
