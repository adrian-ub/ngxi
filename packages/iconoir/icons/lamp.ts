import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLampIcon],svg[iconoir-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21h3m3 0h-3m0 0V11m0-4v4m0 0H6l3-8h6l3 8z"></svg:path>`,
})
export class IconoirLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
