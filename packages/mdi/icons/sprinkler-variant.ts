import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSprinklerVariantIcon],svg[mdi-sprinkler-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h4v12h-4zM7 9h2V7H7zM4 8h2V6H4zm0 3h2V9H4zm-3 2h2v-2H1zm0-6h2V5H1zm0 3h2V8H1zm17 1h2V9h-2zm3-1h2V8h-2zm0-5v2h2V5zm0 8h2v-2h-2zm-6-4h2V7h-2zm3-1h2V6h-2zm-8-1h.33L11 9h2l.67-2H14V6h-4z"></svg:path>`,
})
export class MdiSprinklerVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
