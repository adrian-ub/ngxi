import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSunriseIcon],svg[simple-icons-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 0A12 12 0 1 0 24 11.999A12.01 12.01 0 0 0 12.001 0m0 2.464a9.53 9.53 0 0 1 9.514 8.889a9.5 9.5 0 0 1-.863 4.649H3.35a9.53 9.53 0 0 1 .616-9.14a9.53 9.53 0 0 1 8.036-4.398"></svg:path>`,
})
export class SimpleIconsSunriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
