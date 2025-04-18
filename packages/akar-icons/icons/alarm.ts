import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAlarmIcon],svg[akar-icons-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="M15.5 9.5L12 13m7 6l1 3M5 19l-1 3M2 5l3-3m14 0l3 3M12 4V2"></svg:path></svg:g>`,
})
export class AkarIconsAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
