import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBorderRightIcon],svg[carbon-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 3v26h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zm-4 0v2h-2V3zM9 3v2H7V3zM5 3v2H3V3zm0 4v2H3V7zm0 4v2H3v-2zm0 4v2H3v-2zm0 8v2H3v-2zm0-4v2H3v-2zm20 8v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm3-17h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
