import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCube28FilledIcon],svg[fluent-cube-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.793 2.734a3.25 3.25 0 0 1 2.414 0l8.75 3.5A3.25 3.25 0 0 1 26 9.252v9.505a3.25 3.25 0 0 1-2.043 3.017l-8.75 3.5a3.25 3.25 0 0 1-2.414 0l-8.75-3.5A3.25 3.25 0 0 1 2 18.757V9.252a3.25 3.25 0 0 1 2.043-3.018zM8.052 9.071a.75.75 0 0 0-.604 1.373l5.802 2.55v6.759a.75.75 0 0 0 1.5 0v-6.758l5.802-2.55a.75.75 0 1 0-.604-1.374L14 11.686z"></svg:path>`,
})
export class FluentCube28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
