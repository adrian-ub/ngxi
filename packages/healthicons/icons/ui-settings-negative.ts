import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsNegativeIcon],svg[healthicons-ui-settings-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiSettingsNegative0)"><svg:path d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path fill-rule="evenodd" d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM20 6v1.202c-.666 6.63-2.895 7.56-9.365 4.463l-.223-.13l-4 6.93l.932.538c5.34 3.79 5.341 6.153.103 9.935l-1.035.598l4 6.928l.434-.25c6.335-3.02 8.484-2.006 9.154 4.62V42h8v-.304l.027.329c.508-7.477 2.444-8.907 8.8-6l.761.44l3.98-6.894l.02-.035l-.456-.264c-5.899-4.074-5.838-6.483.066-10.583l.39-.225l-4-6.928l-.69.399C30.662 14.843 28.618 13.6 28 6.734V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiSettingsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiSettingsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
