import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPlus1Icon],svg[picon-plus1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1L5 3V2l2-2h1v8H7M5 5H0V4h5M2 7V2h1v5"></svg:path>`,
})
export class PiconPlus1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
