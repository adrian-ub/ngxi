import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoffeeOffIcon],svg[tabler-coffee-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 14c.83.642 2.077 1.017 3.5 1c1.423.017 2.67-.358 3.5-1c.73-.565 1.783-.923 3-.99M8 3q-.292.211-.506.49M12 3a2.4 2.4 0 0 0-1 2a2.4 2.4 0 0 0 1 2"></svg:path><svg:path d="M14 10h3v3m-.257 3.743A6 6 0 0 1 11 21H9a6 6 0 0 1-6-6v-5h7"></svg:path><svg:path d="M20.116 16.124a3 3 0 0 0-3.118-4.953M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCoffeeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
