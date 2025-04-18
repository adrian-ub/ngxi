import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadSignBothIcon],svg[icon-park-road-sign-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 8V16H38L42 12L38 8H10Z"></svg:path><svg:path fill="#2F88FF" d="M38 23V31H10L6 27L10 23H38Z"></svg:path><svg:path stroke-linecap="round" d="M24 31V44"></svg:path><svg:path stroke-linecap="round" d="M24 16V23"></svg:path><svg:path stroke-linecap="round" d="M24 4V8"></svg:path><svg:path stroke-linecap="round" d="M19 44H29"></svg:path></svg:g>`,
})
export class IconParkRoadSignBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
