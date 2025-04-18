import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BubbleRightFillIcon],svg[f7-bubble-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.04 51.93c1.335 0 2.085-.961 2.085-2.414v-6.82h2.625c5.414 0 9.07-3.704 9.07-9.329v-20.32c0-5.649-3.656-8.977-9.07-8.977h-31.5c-5.625 0-9.07 3.352-9.07 8.977v20.32c0 5.602 3.445 9.328 9.07 9.328h15.633l8.46 7.735c1.102 1.03 1.759 1.5 2.696 1.5"></svg:path>`,
})
export class F7BubbleRightFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
