import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMoonIcon],svg[mage-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.182 14.86A9.474 9.474 0 1 1 9.139 2.819a1.053 1.053 0 0 1 1.38 1.295a7.7 7.7 0 0 0-.085 4.642a7 7 0 0 0 4.81 4.811c1.52.45 3.14.42 4.643-.084a1.053 1.053 0 0 1 1.295 1.379"></svg:path>`,
})
export class MageMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
