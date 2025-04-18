import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFastForward20RegularIcon],svg[fluent-fast-forward-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.018 5.486a1 1 0 0 1 1.592-.806l5.88 4.311a1.25 1.25 0 0 1 0 2.017l-5.88 4.311a1 1 0 0 1-1.592-.806v-3.16L4.61 15.319a1 1 0 0 1-1.592-.806V5.486A1 1 0 0 1 4.61 4.68l5.408 3.966zm6.88 4.312l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403m-7 0l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403"></svg:path>`,
})
export class FluentFastForward20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
