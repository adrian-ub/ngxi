import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCopyleftOffIcon],svg[tabler-copyleft-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.303 9.3a3 3 0 0 1 1.405 1.406m-.586 3.413A3.016 3.016 0 0 1 10 14.25"></svg:path><svg:path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCopyleftOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
