import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTIcon],svg[carbon-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 11h3v12h2V11h3V9h-8v2z" fill="currentColor"></svg:path>`,
})
export class CarbonTIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
