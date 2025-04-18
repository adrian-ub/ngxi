import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextbox32FilledIcon],svg[fluent-textbox-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM10 9h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2m-1 7a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m1 5h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2"></svg:path>`,
})
export class FluentTextbox32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
