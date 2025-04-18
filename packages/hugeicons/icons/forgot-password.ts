import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsForgotPasswordIcon],svg[hugeicons-forgot-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.395 21.9a94 94 0 0 1-4.424.1a95 95 0 0 1-4.424-.1c-1.678-.076-3.056-1.385-3.28-3.055C3.12 17.755 3 16.638 3 15.5s.12-2.255.267-3.345c.224-1.67 1.602-2.979 3.28-3.056C7.958 9.034 9.392 9 10.97 9s3.013.034 4.424.1c1.06.048 2 .588 2.605 1.4"></svg:path><svg:path d="M17 14.978A1.99 1.99 0 0 1 19 13c1.105 0 2 .886 2 1.978c0 .394-.116.76-.317 1.069c-.598.919-1.683 1.795-1.683 2.887v.495M19 22h.012M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9M12 15.49v.01m-4-.01v.01"></svg:path></svg:g>`,
})
export class HugeiconsForgotPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
