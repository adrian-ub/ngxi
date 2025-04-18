import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFingerPrintCheckIcon],svg[hugeicons-finger-print-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.927 20.597C3.855 19.189 2.5 16.85 2.5 14.204v-4.45c0-1.184.271-2.307.757-3.312m6.097 15.472a8 8 0 0 0 2.641-.074m5.727-15.424C15.63 2.124 9.896.665 5.927 3.36m12.565 6.968v1.166m-7.996-5.497c2.208 0 3.998 1.88 3.998 4.198m-7.611-1.8a4.4 4.4 0 0 0-.385 1.8v3.598c0 2.319 1.79 4.198 3.998 4.198q.255 0 .5-.032m-.5-7.464v2.999m5.674 4.953c.3.144.673.517.853.817c.06.421.361-1.202 1.828-2.163M21.5 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsFingerPrintCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
