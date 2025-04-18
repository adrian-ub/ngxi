import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChecklistIcon],svg[icon-park-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 10L42 18"></svg:path><svg:path d="M42 10L34 18"></svg:path><svg:path d="M44 30L37 38L33 34"></svg:path><svg:path fill="#2F88FF" d="M26 10H4V18H26V10Z"></svg:path><svg:path fill="#2F88FF" d="M26 30H4V38H26V30Z"></svg:path></svg:g>`,
})
export class IconParkChecklistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
