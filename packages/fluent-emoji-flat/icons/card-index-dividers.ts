import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCardIndexDividersIcon],svg[fluent-emoji-flat-card-index-dividers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M18 4.5A1.5 1.5 0 0 1 19.5 3h4A1.5 1.5 0 0 1 25 4.5V5l-3.5.5L18 5z"></svg:path><svg:path fill="#FFB02E" d="M2 8a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v4H2z"></svg:path><svg:path fill="#00A6ED" d="M13 8.5A1.5 1.5 0 0 1 14.5 7h4A1.5 1.5 0 0 1 20 8.5V9l-3.5 1L13 9z"></svg:path><svg:path fill="#F9C23C" d="M2 12a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v5H2z"></svg:path><svg:path fill="#F8312F" d="M7 12.5A1.5 1.5 0 0 1 8.5 11h4a1.5 1.5 0 0 1 1.5 1.5v.5l-3.5 1L7 13z"></svg:path><svg:path fill="#FCD53F" d="M2 16a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCardIndexDividersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
