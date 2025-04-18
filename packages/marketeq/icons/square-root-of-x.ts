import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSquareRootOfXIcon],svg[marketeq-square-root-of-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m29.167 25l8.333 8.333m0-8.333l-8.333 8.333"></svg:path><svg:path stroke="#306CFE" d="M6.25 25h2.98a2.08 2.08 0 0 1 1.79 1.02l5.647 9.397l5.812-19.354a2.08 2.08 0 0 1 2.084-1.48H43.75"></svg:path></svg:g>`,
})
export class MarketeqSquareRootOfXIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
