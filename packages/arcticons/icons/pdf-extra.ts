import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPdfExtraIcon],svg[arcticons-pdf-extra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.96 20.012c1.738-7.465 8.487-12.987 16.565-12.987C35.933 7.025 43.5 14.592 43.5 24s-7.567 16.975-16.975 16.975"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.164 19.296L4.54 39.441c-.205.818.409 1.534 1.227 1.534h20.758m5.011-12.373H7.607M31.331 8.048L25.4 18.273l-6.033 10.329m17.384 8.896L25.503 18.171"></svg:path>`,
})
export class ArcticonsPdfExtraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
