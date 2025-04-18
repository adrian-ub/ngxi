import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotSpringIcon],svg[streamline-hot-spring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 7a2.8 2.8 0 0 1 1.5 2.24c0 1.93-2.91 3.5-6.5 3.5S.5 11.18.5 9.25A2.8 2.8 0 0 1 2 7"></svg:path><svg:path d="M4.08 2.25c-2 2.5 2 3.5 0 6m2.92-7c-2 2.5 2 5.5 0 8m2.92-7c-2 2.5 2 3.5 0 6"></svg:path></svg:g>`,
})
export class StreamlineHotSpringIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
