import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMoonIcon],svg[picon-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8c-6 0-6-8 0-8c-3 0-3 8 0 8"></svg:path>`,
})
export class PiconMoonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
