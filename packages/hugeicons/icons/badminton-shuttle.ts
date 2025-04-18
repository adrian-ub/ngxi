import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBadmintonShuttleIcon],svg[hugeicons-badminton-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.927 4.38c1.086-.571 2.527-.851 3.968-.158c2.053-2.963 6.157-2.963 8.21 0c1.44-.693 2.882-.413 3.968.157c.502.264.753.396.881.773c.129.378-.024.697-.33 1.336l-4.407 9.206c-.209.435-.313.653-.361.855c-.049.202-.062.76-.089 1.877C15.722 20.353 14.48 22 12 22s-3.721-1.648-3.767-3.574c-.027-1.117-.04-1.675-.089-1.877s-.152-.42-.36-.855L3.375 6.488c-.306-.64-.459-.958-.33-1.336c.128-.377.379-.509.881-.773M8 17h8M8 4l3 13m5-13l-3 13"></svg:path><svg:path d="M6 12c1.2 1.333 2.8 1.333 4 0c1.2 1.333 2.8 1.333 4 0c1.2 1.333 2.8 1.333 4 0"></svg:path></svg:g>`,
})
export class HugeiconsBadmintonShuttleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
