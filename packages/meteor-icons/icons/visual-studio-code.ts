import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVisualStudioCodeIcon],svg[meteor-icons-visual-studio-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l5 3.5v-7Zm-8 6l-3-3l3.4-3L1 9l3-3l4 2.9L17 1l6 3v16l-6 3l-9-7.9Z"></svg:path>`,
})
export class MeteorIconsVisualStudioCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
