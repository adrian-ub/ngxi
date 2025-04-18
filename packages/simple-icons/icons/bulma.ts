import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBulmaIcon],svg[simple-icons-bulma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.25 0l-6 6l-1.5 10.5l7.5 7.5l9-6l-6-6l4.5-4.5z"></svg:path>`,
})
export class SimpleIconsBulmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
