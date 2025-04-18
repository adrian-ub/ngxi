import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiWsAnalyticsIcon],svg[oui-ws-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8.7h4.2v5.6H1zm9.8-3.5H15v9.1h-4.2zM5.9 1.7h4.2v12.6H5.9zm-3.5 8.4v2.8h1.4v-2.8zm4.9-7v9.8h1.4V3.1zm4.9 3.5v6.3h1.4V6.6z"></svg:path>`,
})
export class OuiWsAnalyticsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
