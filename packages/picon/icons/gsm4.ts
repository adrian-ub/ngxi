import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGsm4Icon],svg[picon-gsm4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l8-8v8"></svg:path>`,
})
export class PiconGsm4Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
