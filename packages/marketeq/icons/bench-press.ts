import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBenchPressIcon],svg[marketeq-bench-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 33.333v8.334M16.667 25v16.667zM6.25 33.333h37.5zm2.083 0v8.334z"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M16.667 25a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M16.563 16.667h.208"></svg:path></svg:g>`,
})
export class MarketeqBenchPressIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
