import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAlertUrgent24Icon],svg[fluent-color-alert-urgent-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAlertUrgent240)" d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"></svg:path><svg:path fill="url(#fluentColorAlertUrgent241)" d="M6.711 6.515a5.824 5.824 0 0 1 7.6 2.746l.098.209l1.288 2.892l1.698 1.47c.093.08.173.173.266.324l.059.115a1.25 1.25 0 0 1-.637 1.649L6.756 20.49A1.25 1.25 0 0 1 5 19.347l-.001-2.343l-1.242-2.791A5.82 5.82 0 0 1 6.71 6.515"></svg:path><svg:path fill="url(#fluentColorAlertUrgent242)" d="M15.861 2.094c2.086 1.14 3.652 2.602 4.682 4.387s1.515 3.872 1.459 6.248a.75.75 0 0 1-1.5-.036c.05-2.111-.372-3.927-1.258-5.462c-.886-1.536-2.249-2.809-4.102-3.821a.75.75 0 1 1 .72-1.316m-.237 3.6c.967.527 1.742 1.295 2.316 2.29c.574.994.851 2.049.824 3.15a.75.75 0 1 1-1.5-.037c.02-.821-.185-1.604-.623-2.364s-1.014-1.328-1.735-1.722a.75.75 0 0 1 .718-1.317"></svg:path><svg:defs><svg:lineargradient id="fluentColorAlertUrgent240" x1="11.438" x2="12.756" y1="18.188" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F" stop-opacity=".988"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent241" x1="17.259" x2="4.822" y1="16.64" y2="8.252" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6F47"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAlertUrgent242" x1="16.296" x2="20.981" y1="3.525" y2="14.356" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#5B2AB5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAlertUrgent24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
