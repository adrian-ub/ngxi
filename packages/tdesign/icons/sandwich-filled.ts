import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSandwichFilledIcon],svg[tdesign-sandwich-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 2.515a2 2 0 0 1 2.494.476L21 8.638H3v-.232zM3 17.368h18v4.63H3zm18-6.728H3v4.63h18z"></svg:path>`,
})
export class TdesignSandwichFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
