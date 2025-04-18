import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPlusIcon],svg[iconoir-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 12h6m6 0h-6m0 0V6m0 6v6"></svg:path>`,
})
export class IconoirPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
