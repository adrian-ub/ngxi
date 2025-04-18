import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBucket20FilledIcon],svg[fluent-paint-bucket-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.5a.5.5 0 0 0-1 0V4c-.205.072-.397.19-.56.354L2.353 9.439a1.5 1.5 0 0 0 0 2.122l4.335 4.335a1.5 1.5 0 0 0 2.122 0l5.085-5.085a1.5 1.5 0 0 0 0-2.122L9.561 4.354A1.5 1.5 0 0 0 9 4zm4.269 7.5H3.207L8 5.207V6.5a.5.5 0 0 0 1 0V5.207l4.19 4.19a.5.5 0 0 1 .079.603m2.747 1.392a.597.597 0 0 0-1.032 0l-1.652 2.833C12.355 15.898 13.562 18 15.5 18c1.937 0 3.145-2.102 2.168-3.775z"></svg:path>`,
})
export class FluentPaintBucket20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
