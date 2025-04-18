import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQrCode01Icon],svg[hugeicons-qr-code-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.994 2c-2.797.064-4.43.331-5.547 1.447S2.064 6.197 2 8.994M15.006 2c2.797.064 4.43.331 5.547 1.447S21.936 6.197 22 8.994M15.006 22c2.797-.064 4.43-.331 5.547-1.447s1.383-2.75 1.447-5.547M8.994 22c-2.797-.064-4.43-.331-5.547-1.447S2.064 17.803 2 15.006M17 7h.009M13 6v3c0 1.886 0 2.828-.586 3.414S10.886 13 9 13H6"></svg:path><svg:path d="M6.293 6.293C6 6.586 6 7.057 6 8s0 1.414.293 1.707m0-3.414C6.586 6 7.057 6 8 6s1.414 0 1.707.293m-3.414 0q0 0 0 0m0 3.414C6.586 10 7.057 10 8 10s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0C10 9.414 10 8.943 10 8s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414q0 0 0 0M17 15c.471 0 .707 0 .854.146c.146.147.146.383.146.854v1c0 .471 0 .707-.146.854C17.707 18 17.47 18 17 18h-2c-.471 0-.707 0-.854-.146C14 17.707 14 17.47 14 17v-1c0-.471 0-.707.146-.854C14.293 15 14.53 15 15 15zM6 18h5m6-8v2"></svg:path></svg:g>`,
})
export class HugeiconsQrCode01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
