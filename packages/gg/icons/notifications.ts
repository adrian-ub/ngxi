import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggNotificationsIcon],svg[gg-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M12 6H4v14h14v-8h-2v6H6V8h6z"></svg:path></svg:g>`,
})
export class GgNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
