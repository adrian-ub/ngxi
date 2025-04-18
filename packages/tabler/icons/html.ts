import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHtmlIcon],svg[tabler-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V8l2 5l2-5v8M1 16V8m4 0v8m-4-4h4m2-4h4M9 8v8m11-8v8h3"></svg:path>`,
})
export class TablerHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
