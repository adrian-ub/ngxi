import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMediumPriorityIcon],svg[flat-color-icons-medium-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFC107" d="m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0"></svg:path><svg:g fill="#37474F"><svg:circle cx="24" cy="24" r="2"></svg:circle><svg:circle cx="32" cy="24" r="2"></svg:circle><svg:circle cx="16" cy="24" r="2"></svg:circle></svg:g>`,
})
export class FlatColorIconsMediumPriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
