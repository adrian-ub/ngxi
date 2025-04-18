import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCaptureIcon],svg[system-uicons-capture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.5V4.494a2 2 0 0 0-1.994-2L13.5 2.485m5 11.015v3a2 2 0 0 1-2 2h-3m-6-16.015l-3.006.01a2 2 0 0 0-1.994 2V7.5m5 11h-3a2 2 0 0 1-2-2v-3"></svg:path>`,
})
export class SystemUiconsCaptureIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
