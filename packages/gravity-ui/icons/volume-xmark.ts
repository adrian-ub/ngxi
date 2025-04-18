import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeXmarkIcon],svg[gravity-ui-volume-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19zM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m10.28.72a.75.75 0 1 0-1.06 1.06L12.44 8l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06L14.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L13.5 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
