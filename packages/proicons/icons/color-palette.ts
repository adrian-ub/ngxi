import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsColorPaletteIcon],svg[proicons-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(-1 0 0 1 16.654 6.034)"></svg:circle><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(-1 0 0 1 12.156 5.221)"></svg:circle><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(-1 0 0 1 8.654 7.94)"></svg:circle><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(-1 0 0 1 7.685 12.156)"></svg:circle><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(-1 0 0 1 9.904 15.948)"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12A9.25 9.25 0 1 0 12 21.25c1.318 0 2.224-1.28 2.329-2.594l.117-1.473a3 3 0 0 1 2.758-2.752l1.651-.129c1.28-.1 2.395-1.019 2.395-2.302Z"></svg:path></svg:g>`,
})
export class ProiconsColorPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
