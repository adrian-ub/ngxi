import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedD2tIcon],svg[token-branded-d2t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedD2t0)" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#37C0D2" d="M4.856 17.473A8.96 8.96 0 0 1 3 12c0-2.026.67-3.893 1.8-5.4h2.441c.585.039 1.935.18 2.655.472c.028-.281.225-.911.799-1.136c.72-.282.967-.282 2.351-.282c.76 0 1.384.04 1.946.074c.467.028.9.056 1.328.056c.76 0 1.406-.253 1.631-.383a2.31 2.31 0 0 1-1.8 1.35c-.281.045-.59.08-.9.113c-1.142.13-2.283.253-2.402.81c-.118.562.237 1.294.434 1.597c.225.394.64 1.34.534 2.003a7 7 0 0 1-.146.731a.6.6 0 0 0-.028.264c.016.17.478 1.722.708 2.475c.113.13.366.44.484.653c.152.264.292.703-.096 1.575c-.393.877-1.322 1.564-2.154 1.564c-.512 0-.765-.315-.979-.59c-.135-.17-.258-.322-.422-.378c-.09-.034-.253-.062-.472-.101c-.838-.157-2.43-.45-3.246-1.434c-.557.225-1.788.815-2.61 1.44"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedD2t0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0B2E30"></svg:stop><svg:stop offset="1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedD2tIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
