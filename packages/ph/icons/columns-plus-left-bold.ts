import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftBoldIcon],svg[ph-columns-plus-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 28h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16ZM68 128a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhColumnsPlusLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
