import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoFillIcon],svg[ph-replit-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 160h72v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16m56-136H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72V40a16 16 0 0 0-16-16m88 72h-72v64h72a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhReplitLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
