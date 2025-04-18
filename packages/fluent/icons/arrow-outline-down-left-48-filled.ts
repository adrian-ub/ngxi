import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineDownLeft48FilledIcon],svg[fluent-arrow-outline-down-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.039 38.156c-.383 3.36 2.464 6.2 5.822 5.81l23.386-2.721c3.529-.41 5.026-4.712 2.516-7.226l-2.75-2.751l9.453-9.452a5.25 5.25 0 0 0 .003-7.421l-8.833-8.85a5.25 5.25 0 0 0-7.427-.003l-9.465 9.46l-2.843-2.787c-2.526-2.478-6.797-.963-7.198 2.553z"></svg:path>`,
})
export class FluentArrowOutlineDownLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
