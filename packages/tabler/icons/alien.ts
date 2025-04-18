import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlienIcon],svg[tabler-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 17a2.5 2.5 0 0 0 2 0"></svg:path><svg:path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.82 11.82 0 0 0 2 8.592a10.8 10.8 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.8 10.8 0 0 0 3.199-3.064a11.9 11.9 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zm-4 8l2 2m6-2l-2 2"></svg:path></svg:g>`,
})
export class TablerAlienIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
