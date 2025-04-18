import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHistoryQueryIcon],svg[icon-park-history-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"></svg:path><svg:circle cx="32" cy="32" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 36L42 40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 16H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 24L22 24"></svg:path></svg:g>`,
})
export class IconParkHistoryQueryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
