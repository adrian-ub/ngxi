import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertUrgent16Icon],svg[fluent-color-alert-urgent-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertUrgent160)" d="M10.5 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorAlertUrgent161)" d="M2.538 10.706a4 4 0 0 1 6.927-4l.82 1.42l1.906 1.387a.5.5 0 0 1-.044.837l-2.53 1.461l.003.002l-2.738 1.581v-.004l-2.53 1.46a.5.5 0 0 1-.747-.38l-.247-2.343z"></svg:path><svg:path fill="url(#fluentColorAlertUrgent162)" d="M10.703 1.043a.5.5 0 0 0-.406.914c.008.004.113.053.283.153a7.2 7.2 0 0 1 2.49 2.476c1.02 1.709.946 3.522.932 3.864L14 8.5a.5.5 0 0 0 1 .001v.004l.001-.026a8 8 0 0 0-.065-1.433c-.11-.828-.375-1.914-1.006-2.972c-1.25-2.093-3.111-2.98-3.227-3.03m.09 2.555a.5.5 0 1 0-.567.823a3.48 3.48 0 0 1 1.548 2.825v.004a.5.5 0 0 0 1 0v-.063q0-.056-.006-.144a4.6 4.6 0 0 0-.533-1.858a4.5 4.5 0 0 0-.921-1.177a4 4 0 0 0-.521-.41"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertUrgent160" x1="8.5" x2="9.672" y1="12.437" y2="14.937" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent161" x1="11.992" x2="3.123" y1="12.148" y2="6.276" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent162" x1="11.191" x2="14.324" y1="2.063" y2="9.625" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlertUrgent16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
