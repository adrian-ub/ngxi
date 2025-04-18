import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ToggleBorderIcon],svg[fluent-mdl2-toggle-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1582 558q96 0 181 37t148 100t100 148t37 181t-37 181t-100 148t-148 100t-181 37H466q-96 0-181-37t-148-100t-100-148t-37-181t37-181t100-148t148-100t181-37zm0 838q77 0 145-29t118-80t80-118t30-145q0-77-29-144t-80-118t-119-80t-145-30H466q-77 0-145 29t-118 80t-80 118t-30 145q0 77 29 144t80 118t119 80t145 30z"></svg:path>`,
})
export class FluentMdl2ToggleBorderIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
