import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShoppingCodeIcon],svg[iconoir-shopping-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 5v2m4-2v6m8-6v1M6 10v6m0 2.5v.5m4-.5v.5m4-.5v.5m4-.5v.5m-8-5v2m4-3v3m0-11v5m4-1v7"></svg:path>`,
})
export class IconoirShoppingCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
