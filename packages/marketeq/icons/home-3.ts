import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHome3Icon],svg[marketeq-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 10.417H14.583l8.334 8.333v20.833H43.75V19.604a2.08 2.08 0 0 0-.604-1.458z"></svg:path><svg:path stroke="#344054" d="M6.25 39.583V19.604c.002-.546.22-1.07.604-1.458l7.73-7.73l8.333 8.334v20.833z"></svg:path></svg:g>`,
})
export class MarketeqHome3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
