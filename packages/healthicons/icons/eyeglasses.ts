import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEyeglassesIcon],svg[healthicons-eyeglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.392 31c-2.597 5.328-8.066 9-14.392 9s-11.795-3.672-14.391-9H7.412c2.73 6.464 9.13 11 16.588 11s13.857-4.536 16.588-11zM12.381 13C15.297 9.92 19.424 8 24 8s8.703 1.92 11.619 5h2.63C34.957 8.742 29.799 6 24 6S13.043 8.742 9.751 13zM15 24c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5s-2 1.12-2 2.5s.895 2.5 2 2.5m20-2.5c0 1.38-.895 2.5-2 2.5s-2-1.12-2-2.5s.895-2.5 2-2.5s2 1.12 2 2.5"></svg:path><svg:path fill-rule="evenodd" d="M22.683 19.38a4 4 0 0 0-.026-.98h2.686a4 4 0 0 0-.026.98l.572 6A4 4 0 0 0 29.87 29H38a4 4 0 0 0 4-4v-5h1v-5H29.3c-1.224 0-2.31.546-3.04 1.4h-4.52A3.99 3.99 0 0 0 18.7 15H5v5h1v5a4 4 0 0 0 4 4h8.13a4 4 0 0 0 3.981-3.62zM10 17a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8.13a2 2 0 0 0 1.99-1.81l.572-6A2 2 0 0 0 18.7 17zm17.308 2.19A2 2 0 0 1 29.3 17H38a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8.13a2 2 0 0 1-1.99-1.81z" clip-rule="evenodd"></svg:path><svg:path d="M29.35 33.437a1 1 0 1 0-.7-1.874c-2.06.768-3.527 1.146-4.877 1.162c-1.327.017-2.628-.315-4.345-1.129a1 1 0 0 0-.856 1.808c1.89.895 3.499 1.342 5.226 1.321c1.703-.021 3.432-.498 5.551-1.288"></svg:path></svg:g>`,
})
export class HealthiconsEyeglassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
