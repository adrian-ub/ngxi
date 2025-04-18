import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsStatisticsIcon],svg[flat-color-icons-statistics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#37474F"><svg:path d="M23 5h2v36h-2z"></svg:path><svg:path d="m25.817 32.772l1.414 1.414l-10.04 10.04l-1.414-1.414z"></svg:path><svg:path d="m32.259 42.824l-1.414 1.414l-10.04-10.04l1.414-1.414z"></svg:path></svg:g><svg:path fill="#CFD8DC" d="M4 8h40v28H4z"></svg:path><svg:g fill="#607D8B"><svg:path d="M3 7h42v4H3zm0 28h42v2H3z"></svg:path><svg:circle cx="31.5" cy="43.5" r="1.5"></svg:circle><svg:circle cx="16.5" cy="43.5" r="1.5"></svg:circle></svg:g><svg:g fill="#C51162"><svg:path d="m31.9 18.9l-5.9 6l-6-6l-8.1 8l2.2 2.2l5.9-6l6 6l8.1-8z"></svg:path><svg:path d="m36 24l-7-7h7z"></svg:path></svg:g>`,
})
export class FlatColorIconsStatisticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
