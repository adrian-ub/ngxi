import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMeteorIcon],svg[meteor-icons-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9.5" cy="14.5" r="3.5"></svg:circle><svg:path d="M8 5L4 9a1 1 0 0 0 11 11l7-7m-6-2l6-6m-6-1l2-2m-5 5"></svg:path></svg:g>`,
})
export class MeteorIconsMeteorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
