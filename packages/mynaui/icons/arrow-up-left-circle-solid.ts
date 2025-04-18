import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpLeftCircleSolidIcon],svg[mynaui-arrow-up-left-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m5.818-3.182v4.95a.75.75 0 0 0 1.5 0v-3.14l5.084 5.084a.75.75 0 0 0 1.06-1.06L10.63 9.568h3.139a.75.75 0 0 0 0-1.5h-4.95a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiArrowUpLeftCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
