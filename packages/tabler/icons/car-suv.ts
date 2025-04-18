import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarSuvIcon],svg[tabler-car-suv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 9l2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M10 9V5M2 7v4"></svg:path><svg:path d="M22.001 14.001A5 5 0 0 0 18 12a5 5 0 0 0-4 2h-3a4.998 4.998 0 0 0-8.003.003"></svg:path><svg:path d="M5 12V9h13"></svg:path></svg:g>`,
})
export class TablerCarSuvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
