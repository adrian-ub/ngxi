import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSkypeIcon],svg[hugeicons-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 10c0-1.105-1.343-2-3-2s-3 .895-3 2s1.343 2 3 2s3 .895 3 2s-1.343 2-3 2s-3-.895-3-2"></svg:path><svg:path d="M18 20a4 4 0 0 0 2.954-6.697c-.675-.739-.898-1.042-.986-2.026a7.97 7.97 0 0 0-2.311-4.934a8 8 0 0 0-8.054-1.977c-.943.295-1.31.205-2.254-.133a4 4 0 0 0-4.303 6.464c.675.739.898 1.042.986 2.026a7.97 7.97 0 0 0 2.311 4.934a8 8 0 0 0 8.054 1.977c.943-.295 1.31-.205 2.254.133c.421.15.875.233 1.349.233"></svg:path></svg:g>`,
})
export class HugeiconsSkypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
