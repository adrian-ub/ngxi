import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTriggerSourceIcon],svg[pajamas-trigger-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25.75a.75.75 0 0 1 1.5 0V2c0 2.9 2.35 5.25 5.25 5.25h1.25a.75.75 0 0 1 0 1.5H14A5.25 5.25 0 0 0 8.75 14v1.25a.75.75 0 0 1-1.5 0V14c0-2.9-2.35-5.25-5.25-5.25H.75a.75.75 0 0 1 0-1.5H2C4.9 7.25 7.25 4.9 7.25 2zM5.095 8A6.8 6.8 0 0 1 8 10.905A6.8 6.8 0 0 1 10.905 8A6.8 6.8 0 0 1 8 5.095A6.8 6.8 0 0 1 5.095 8" clip-rule="evenodd"></svg:path>`,
})
export class PajamasTriggerSourceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
