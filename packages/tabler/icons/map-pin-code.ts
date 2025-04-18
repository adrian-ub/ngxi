import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinCodeIcon],svg[tabler-map-pin-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M11.85 21.48a2 2 0 0 1-1.263-.58l-4.244-4.243a8 8 0 1 1 13.385-3.585M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path></svg:g>`,
})
export class TablerMapPinCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
