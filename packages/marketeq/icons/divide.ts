import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDivideIcon],svg[marketeq-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 8.333a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333M29.167 37.5a4.167 4.167 0 1 0-8.334 0a4.167 4.167 0 0 0 8.334 0"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h37.5"></svg:path></svg:g>`,
})
export class MarketeqDivideIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
