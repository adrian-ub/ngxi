import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGsm3Icon],svg[picon-gsm3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v4h1V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
