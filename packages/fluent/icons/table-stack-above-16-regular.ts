import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackAbove16RegularIcon],svg[fluent-table-stack-above-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm9 12a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 4.5 14zM3 7h2v3H3zm3 0h4v3H6zm5 0h2v3h-2zm-1 6H6v-2h4zm-5 0h-.5A1.5 1.5 0 0 1 3 11.5V11h2zm6 0v-2h2v.5a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class FluentTableStackAbove16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
