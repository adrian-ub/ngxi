import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopAlarmCircleFilledIcon],svg[pepicons-pop-alarm-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopAlarmCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 8.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M5.5 14a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M5.793 21.207a1 1 0 0 0 1.414 0l1.5-1.5a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 0 1.414m11.5-2.914a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M13 10a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"></svg:path><svg:path d="M17 14a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M9.332 6.172L5.574 9.76s-.077-.07-.19-.198c-.257-.292-.697-.881-.821-1.601c-.113-.654.035-1.417.818-2.165c.783-.747 1.551-.86 2.2-.717c.713.157 1.281.624 1.561.894c.123.118.19.199.19.199m7.336 0l3.758 3.588s.077-.07.19-.198c.257-.292.697-.881.821-1.601c.113-.654-.035-1.417-.818-2.165c-.783-.747-1.551-.86-2.2-.717c-.713.157-1.281.624-1.561.894c-.123.118-.19.199-.19.199"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopAlarmCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopAlarmCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
