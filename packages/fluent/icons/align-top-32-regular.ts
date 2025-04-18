import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignTop32RegularIcon],svg[fluent-align-top-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2zm1 7.5A3.5 3.5 0 0 1 8.5 7h3a3.5 3.5 0 0 1 3.5 3.5v15a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 25.5zM8.5 9A1.5 1.5 0 0 0 7 10.5v15A1.5 1.5 0 0 0 8.5 27h3a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 11.5 9zm8.5 1.5A3.5 3.5 0 0 1 20.5 7h3a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5zM20.5 9a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 23.5 9z"></svg:path>`,
})
export class FluentAlignTop32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
