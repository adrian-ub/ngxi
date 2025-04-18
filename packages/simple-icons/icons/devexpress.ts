import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDevexpressIcon],svg[simple-icons-devexpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.4 0h21.2c.8 0 1.4.6 1.4 1.4v1.1c0 .8-.6 1-.9 1C11.7 4.9 4.2 9.7 0 14.1V1.4C0 .6.6 0 1.4 0m.022 19.567L1.7 19.2C5.3 14.6 12.4 8.3 24 6.3v16.3c0 .8-.6 1.4-1.4 1.4H1.4C.6 24 0 23.4 0 22.6v-.4c0-.3.2-.8.3-.9c.252-.589.646-1.107 1.122-1.733"></svg:path>`,
})
export class SimpleIconsDevexpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
