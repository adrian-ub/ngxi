import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasArrowUpIcon],svg[pajamas-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.72 5.841a.75.75 0 1 0 1.06-1.06L8.53 1.53L8 1l-.53.53l-3.25 3.25a.75.75 0 0 0 1.06 1.061l1.97-1.97V14.25a.75.75 0 0 0 1.5 0V3.871z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
