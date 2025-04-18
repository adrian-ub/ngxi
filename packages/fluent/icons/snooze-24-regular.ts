import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSnooze24RegularIcon],svg[fluent-snooze-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.244 13.004a.75.75 0 0 1 .662 1.104l-.057.09l-4.622 6.301h4.017a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743L8.244 22H2.747a.75.75 0 0 1-.661-1.105l.057-.089l4.62-6.303H2.749a.75.75 0 0 1-.743-.648l-.007-.101a.75.75 0 0 1 .649-.743l.101-.007zM21.252 2a.75.75 0 0 1 .638 1.144l-.06.084l-8.491 10.268h7.913a.75.75 0 0 1 .743.649l.007.101a.75.75 0 0 1-.648.744l-.102.006h-9.505a.75.75 0 0 1-.638-1.144l.06-.083L19.66 3.5l-7.912.001a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .649-.743l.1-.008z"></svg:path>`,
})
export class FluentSnooze24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
