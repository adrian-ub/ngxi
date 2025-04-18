import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose32RegularIcon],svg[fluent-compose-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19.414L29.707 3.707a1 1 0 0 0-1.414-1.414L12.586 18L12 20zM19 3a1 1 0 1 1 0 2H7.5A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5V13a1 1 0 1 1 2 0v11.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3z"></svg:path>`,
})
export class FluentCompose32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
