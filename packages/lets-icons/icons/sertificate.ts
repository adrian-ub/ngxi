import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSertificateIcon],svg[lets-icons-sertificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M19 11V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 5 16.92 5 15.8 5H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 17 6.08 17 7.2 17H14m-6-4h4M8 9h7"></svg:path><svg:circle cx="18" cy="15" r="1"></svg:circle><svg:path stroke-linecap="round" d="M20 20s-.5-1-2-1s-2 1-2 1"></svg:path></svg:g>`,
})
export class LetsIconsSertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
