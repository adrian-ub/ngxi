import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWifi4Icon],svg[picon-wifi4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3Q4-1 0 3l4 4"></svg:path>`,
})
export class PiconWifi4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
