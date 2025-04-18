import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckboxPerson20FilledIcon],svg[fluent-checkbox-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.038a3 3 0 0 1-.038-.5a2.5 2.5 0 0 1 2.273-2.49A3 3 0 0 1 17 9.401V6a3 3 0 0 0-3-3zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708M17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentCheckboxPerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
