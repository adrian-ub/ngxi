import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSertificateLightIcon],svg[lets-icons-sertificate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M18.5 9.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.98 5.5 16.42 5.5 15.3 5.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 7.02 4.5 7.58 4.5 8.7v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h5.8m-6-3h4m-4-4h7"></svg:path><svg:circle cx="17.5" cy="13.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M19.5 18.5s-.5-1-2-1s-2 1-2 1"></svg:path></svg:g>`,
})
export class LetsIconsSertificateLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
