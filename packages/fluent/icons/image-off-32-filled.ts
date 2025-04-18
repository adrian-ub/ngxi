import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageOff32FilledIcon],svg[fluent-image-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.896 28.31l1.397 1.397a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L3.69 5.105A4.5 4.5 0 0 0 3 7.5v17c0 .849.235 1.643.644 2.32l10.589-10.588q.15-.15.316-.268l1.546 1.545a.5.5 0 0 0-.448.137L5.03 28.262A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 2.395-.69m2.018-2.93q.087-.43.087-.88v-17A4.5 4.5 0 0 0 24.5 3h-17q-.451.001-.88.086zM25 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class FluentImageOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
