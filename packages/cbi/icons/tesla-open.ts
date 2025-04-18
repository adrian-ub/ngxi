import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTeslaOpenIcon],svg[cbi-tesla-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.635 9.991l-4.938-.1l-.064-7.01c.067-.958-.633-1.4-1.366.059l-5.629 9.53c-.648 1.046-.557 1.41.625 1.524h5l.131 6.573c-.017 1.41.574 2.16 1.438.432l5.686-9.735c.482-.728.282-1.251-.883-1.273"></svg:path>`,
})
export class CbiTeslaOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
