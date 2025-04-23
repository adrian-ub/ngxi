import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePaletteIcon],svg[lucide-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></svg:path><svg:circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class LucidePaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
