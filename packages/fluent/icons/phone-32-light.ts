import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone32LightIcon],svg[fluent-phone-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 24a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM8 5.25A2.25 2.25 0 0 1 10.25 3h11.5A2.25 2.25 0 0 1 24 5.25v21.5A2.25 2.25 0 0 1 21.75 29h-11.5A2.25 2.25 0 0 1 8 26.75z"></svg:path>`,
})
export class FluentPhone32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
