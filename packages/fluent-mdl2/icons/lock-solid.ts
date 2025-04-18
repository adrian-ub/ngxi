import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LockSolidIcon],svg[fluent-mdl2-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 896v1152H256V896h256V522q0-108 39-203t108-166T821 41t203-41q109 0 202 41t163 112t108 166t39 203v374zm-1152 0h768V522q0-81-29-152t-80-126t-122-85t-153-31q-82 0-152 31t-122 85t-81 125t-29 153z"></svg:path>`,
})
export class FluentMdl2LockSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
