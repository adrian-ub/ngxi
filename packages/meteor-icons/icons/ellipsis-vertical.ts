import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEllipsisVerticalIcon],svg[meteor-icons-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="5" r="1"></svg:circle><svg:circle cx="12" cy="12" r="1"></svg:circle><svg:circle cx="12" cy="19" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsEllipsisVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
