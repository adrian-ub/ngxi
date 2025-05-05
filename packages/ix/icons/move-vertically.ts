import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMoveVerticallyIcon],svg[ix-move-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m155.584 377.751l30.169-30.17l48.915 48.915V277.333h42.667v119.164l48.915-48.916l30.17 30.17l-100.418 100.418zM356.42 134.252l-30.17 30.17l-48.915-48.915v119.162h-42.667V115.506l-48.915 48.916l-30.17-30.17L256.001 33.833z" clip-rule="evenodd"></svg:path>`,
})
export class IxMoveVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
