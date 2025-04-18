import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextSuperscriptIcon],svg[carbon-text-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 17h-6v-6h4V9h-4V7h6v6h-4v2h4zM4 7v2h7v16h2V9h7V7z"></svg:path>`,
})
export class CarbonTextSuperscriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
