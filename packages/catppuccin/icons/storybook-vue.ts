import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStorybookVueIcon],svg[catppuccin-storybook-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M6.5 10.1c.45 1.05 1.23 1.4 2.46 1.4h-.21c1.35 0 2.25-.68 2.25-1.7c0-.84-.62-1.26-1.61-1.64L7.91 7.6c-.86-.33-1.41-1-1.41-1.73c0-.68.78-1.26 1.67-1.33l.36-.03c1.14-.1 2.24.53 2.47 1.39"></svg:path><svg:path stroke="#a6da95" d="M3.5 2.5L4 14l9.5.5v-13zm8-.75v1.5"></svg:path></svg:g>`,
})
export class CatppuccinStorybookVueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
