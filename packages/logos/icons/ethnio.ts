import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEthnioIcon],svg[logos-ethnio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#24373E" d="M128 0c70.687 0 128 57.313 128 128s-57.313 128-128 128S0 198.687 0 128S57.313 0 128 0"></svg:path><svg:path fill="#F8F4EF" d="M128 46.968c44.774 0 80.98 36.31 80.98 80.98s-36.31 80.98-80.98 80.98s-80.98-36.206-80.98-80.98c0-44.67 36.258-80.98 80.98-80.98"></svg:path><svg:path fill="#8EB0BD" d="M128 79.778c26.593 0 48.222 21.577 48.222 48.222S154.645 176.222 128 176.222s-48.222-21.63-48.222-48.274s21.577-48.17 48.222-48.17"></svg:path>`,
})
export class LogosEthnioIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
