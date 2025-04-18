import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRainbowIcon],svg[mynaui-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17.5v-2a9 9 0 1 1 18 0v2m-15 0v-2a6 6 0 0 1 12 0v2m-9 0v-2a3 3 0 1 1 6 0v2"></svg:path>`,
})
export class MynauiRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
