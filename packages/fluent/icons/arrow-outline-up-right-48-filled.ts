import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineUpRight48FilledIcon],svg[fluent-arrow-outline-up-right-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.969 9.851c.383-3.36-2.464-6.2-5.823-5.81L14.76 6.763c-3.528.41-5.026 4.712-2.515 7.226l2.749 2.751l-9.452 9.452a5.25 5.25 0 0 0-.004 7.421l8.833 8.85a5.25 5.25 0 0 0 7.428.003l9.464-9.46l2.843 2.787c2.526 2.478 6.797.962 7.198-2.553z"></svg:path>`,
})
export class FluentArrowOutlineUpRight48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
