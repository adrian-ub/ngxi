import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler20RegularIcon],svg[fluent-ruler-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.5A1.5 1.5 0 0 0 12.5 2h-5A1.5 1.5 0 0 0 6 3.5v13A1.5 1.5 0 0 0 7.5 18h5a1.5 1.5 0 0 0 1.5-1.5zm-7 9.504h2.5a.5.5 0 0 0 0-1H7V10.5h1.5a.5.5 0 0 0 0-1H7V8h2.5a.5.5 0 0 0 0-1H7V5.5h1.5a.5.5 0 0 0 0-1H7v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1h1.5a.5.5 0 0 0 0-1H7z"></svg:path>`,
})
export class FluentRuler20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
