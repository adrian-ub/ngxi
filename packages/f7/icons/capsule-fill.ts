import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CapsuleFillIcon],svg[f7-capsule-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 29.145c0 12.45 8.693 20.799 21.915 20.799h12.149c13.222 0 21.936-8.35 21.936-20.8c0-12.448-8.714-20.798-21.936-20.798h-12.15C8.694 8.346 0 16.696 0 29.145"></svg:path>`,
})
export class F7CapsuleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
