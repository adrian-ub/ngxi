import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSwapIcon],svg[gg-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-1.5h-6v-2h6V8l3 2.5zm-8 4v-1.5h6v-2H8V12l-3 2.5z"></svg:path>`,
})
export class GgSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
