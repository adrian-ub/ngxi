import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSublimeTextIcon],svg[tabler-brand-sublime-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8L5 12.5V7l14-4.5zm0 9L5 21.5V16l14-4.5zm0-5.5L5 7m0 5.5L19 17"></svg:path>`,
})
export class TablerBrandSublimeTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
