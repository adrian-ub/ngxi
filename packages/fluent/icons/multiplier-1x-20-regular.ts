import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x20RegularIcon],svg[fluent-multiplier-1x-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.5a.5.5 0 0 0-.898-.302a10 10 0 0 0-.22.306c-.33.472-.702 1.005-1.64 1.567a.5.5 0 1 0 .515.858c.545-.327.941-.66 1.243-.972V13.5a.5.5 0 1 0 1 0zm2.854 3.646a.5.5 0 0 0-.708.707L11.293 12l-1.147 1.146a.5.5 0 0 0 .708.707L12 12.707l1.146 1.146a.5.5 0 0 0 .708-.707L12.707 12l1.147-1.147a.5.5 0 0 0-.708-.707L12 11.293z"></svg:path>`,
})
export class FluentMultiplier1x20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
