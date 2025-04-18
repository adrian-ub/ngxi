import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRead32FilledIcon],svg[fluent-mail-read-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.745 2.623a4.5 4.5 0 0 1 4.51 0l9.5 5.5a4.5 4.5 0 0 1 1.587 1.552L16 16.865L2.653 9.682a4.5 4.5 0 0 1 1.592-1.56zm-11.727 8.99q-.018.2-.018.405V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V12.018q0-.21-.02-.415L16.475 18.88a1 1 0 0 1-.948 0z"></svg:path>`,
})
export class FluentMailRead32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
