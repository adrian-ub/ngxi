import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBmwIcon],svg[gg-bmw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M5 12a7 7 0 0 0 7 7v-7h7a7 7 0 0 0-7-7v7z" clip-rule="evenodd"></svg:path>`,
})
export class GgBmwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
