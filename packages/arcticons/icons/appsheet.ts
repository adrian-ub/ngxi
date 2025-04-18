import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppsheetIcon],svg[arcticons-appsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.645 7.718h9.893c1.508 0 2.45 1.632 1.697 2.938L25.697 39.302c-.754 1.307-2.64 1.307-3.393 0l-4.382-7.59a1.96 1.96 0 0 1 0-1.958zH7.462c-1.508 0-2.45 1.632-1.697 2.938l4.382 7.59c.35.606.997.98 1.697.98h25.443"></svg:path>`,
})
export class ArcticonsAppsheetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
