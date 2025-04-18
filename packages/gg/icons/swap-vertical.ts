import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSwapVerticalIcon],svg[gg-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h1.5v-6h2v6H17l-2.5 3zM8 8h1.5v6h2V8H13l-2.5-3z"></svg:path>`,
})
export class GgSwapVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
