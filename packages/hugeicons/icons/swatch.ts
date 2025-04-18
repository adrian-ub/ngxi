import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwatchIcon],svg[hugeicons-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.555 4c.463.429.987.965 1.616 1.609C20.057 7.538 21 8.502 21 9.7s-.943 2.162-2.829 4.092l-6.4 6.547q-.364.37-.771.66"></svg:path><svg:path d="M2 16.615C2 19.59 4.487 22 7.556 22h8.888c2.62 0 3.929 0 4.742-.789c.814-.788.814-2.057.814-4.596c0-.607 0-1.142-.011-1.615"></svg:path><svg:path d="M2 7.556c0-2.62 0-3.929.805-4.742C3.611 2 4.907 2 7.5 2s3.89 0 4.695.814C13 3.627 13 4.937 13 7.556v8.888C13 19.513 10.538 22 7.5 22S2 19.513 2 16.444zM7.5 17.5h.009M2 8h11M2 13h11"></svg:path></svg:g>`,
})
export class HugeiconsSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
