import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTimelineIcon],svg[icon-park-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M31 24C31 26.2091 32.7909 28 35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M13 36C13 38.2091 14.7909 40 17 40C19.2091 40 21 38.2091 21 36C21 33.7909 19.2091 32 17 32C14.7909 32 13 33.7909 13 36Z"></svg:path><svg:path stroke-linecap="round" d="M4 36H13"></svg:path><svg:path stroke-linecap="round" d="M21 36H44"></svg:path><svg:path stroke-linecap="round" d="M4 12H13"></svg:path><svg:path stroke-linecap="round" d="M21 12H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4V44"></svg:path><svg:path stroke-linecap="round" d="M4 24H31"></svg:path><svg:path stroke-linecap="round" d="M39 24H44"></svg:path></svg:g>`,
})
export class IconParkTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
