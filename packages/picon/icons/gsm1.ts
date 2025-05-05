import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGsm1Icon],svg[picon-gsm1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h3V2M0 8l8-8v8"></svg:path>`,
})
export class PiconGsm1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
