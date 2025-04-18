import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler32RegularIcon],svg[fluent-ruler-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2A3.5 3.5 0 0 0 9 5.5v21a3.5 3.5 0 0 0 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.5v-21A3.5 3.5 0 0 0 19.5 2zM11 8h3a1 1 0 1 0 0-2h-3v-.5A1.5 1.5 0 0 1 12.5 4h7A1.5 1.5 0 0 1 21 5.5v21a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5V26h3a1 1 0 1 0 0-2h-3v-2.5h5a1 1 0 1 0 0-2h-5V17h3a1 1 0 1 0 0-2h-3v-2.5h5a1 1 0 1 0 0-2h-5z"></svg:path>`,
})
export class FluentRuler32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
