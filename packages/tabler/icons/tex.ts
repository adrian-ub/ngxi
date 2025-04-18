import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTexIcon],svg[tabler-tex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8V7H3v1m3 7V7m15 8l-5-8m0 8l5-8m-7 4h-4v8h4m-4-4h3"></svg:path>`,
})
export class TablerTexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
