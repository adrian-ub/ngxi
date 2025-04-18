import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ToggleFilledIcon],svg[fluent-mdl2-toggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1582 1490H466q-96 0-181-37t-148-100t-100-148t-37-181t37-181t100-148t148-100t181-37h1116q96 0 181 37t148 100t100 148t37 181t-37 181t-100 148t-148 100t-181 37"></svg:path>`,
})
export class FluentMdl2ToggleFilledIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
