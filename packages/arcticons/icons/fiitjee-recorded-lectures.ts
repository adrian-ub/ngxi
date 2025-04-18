import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFiitjeeRecordedLecturesIcon],svg[arcticons-fiitjee-recorded-lectures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m.5 10.3v-3c0-2.2-1.8-4-4-4h-5"></svg:path><svg:path d="m32.5 24l-15 8.6V15.4zM8.7 36.5v2.1c0 .5.4.8.8.8h2.9"></svg:path></svg:g>`,
})
export class ArcticonsFiitjeeRecordedLecturesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
