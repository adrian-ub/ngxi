import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAxeIcon],svg[marketeq-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 25a22.9 22.9 0 0 1 12.5 6.25a19.7 19.7 0 0 0 4.167-12.5a19.7 19.7 0 0 0-4.167-12.5a22.9 22.9 0 0 1-12.5 6.25z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75h-4.167a2.083 2.083 0 0 1-2.083-2.083v-31.25a4.167 4.167 0 1 1 8.333 0v31.25a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqAxeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
