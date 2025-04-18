import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertUrgent20Icon],svg[fluent-color-alert-urgent-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertUrgent200)" d="M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="url(#fluentColorAlertUrgent201)" d="M2.466 12.248a5.158 5.158 0 1 1 9.424-4.196l1.224 2.75l1.664 1.618a.75.75 0 0 1-.218 1.223l-9.727 4.33a.75.75 0 0 1-1.054-.656l-.09-2.32z"></svg:path><svg:path fill="url(#fluentColorAlertUrgent202)" d="M13.447 1.505a.75.75 0 1 0-.681 1.336a7.75 7.75 0 0 1 4.227 7.23a.75.75 0 0 0 1.5.061q.007-.19.007-.382a9.25 9.25 0 0 0-5.053-8.245"></svg:path><svg:path fill="url(#fluentColorAlertUrgent203)" d="M12.917 4.082a.75.75 0 1 0-.816 1.259A5.25 5.25 0 0 1 14.5 9.672a.75.75 0 1 0 1.5-.021a6.75 6.75 0 0 0-3.082-5.569"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertUrgent200" x1="9.5" x2="10.672" y1="15.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent201" x1="14.5" x2="3.42" y1="14.5" y2="6.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent202" x1="13.362" x2="17.578" y1="2.676" y2="11.588" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent203" x1="13.362" x2="17.578" y1="2.676" y2="11.588" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlertUrgent20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
