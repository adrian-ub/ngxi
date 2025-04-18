import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAnthropicLineIcon],svg[ri-anthropic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.122 5h2.146L22.1 20h-2.146zM7.66 5h2.681l5.77 15h-2.144l-1.538-4H5.572l-1.539 4H1.891zm4 9L9 7.086L6.341 14z"></svg:path>`,
})
export class RiAnthropicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
