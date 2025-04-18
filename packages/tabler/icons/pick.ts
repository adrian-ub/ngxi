import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPickIcon],svg[tabler-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 8l-9.383 9.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0L16 11"></svg:path><svg:path d="M9 3h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 .293.707V15a2 2 0 1 1-4 0v-3l-5-5H9a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class TablerPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
