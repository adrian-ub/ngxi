import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckboxIndeterminate24FilledIcon],svg[fluent-checkbox-indeterminate-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM5 6.25C5 5.56 5.56 5 6.25 5h11.5c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25H6.25C5.56 19 5 18.44 5 17.75zm2.5.25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentCheckboxIndeterminate24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
