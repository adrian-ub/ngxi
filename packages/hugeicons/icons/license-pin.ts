import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLicensePinIcon],svg[hugeicons-license-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.997 9c-.009-3.114-.107-4.765-1.17-5.828C17.654 2 15.768 2 11.997 2h-2C6.227 2 4.341 2 3.17 3.172S1.998 6.229 1.998 10v4c0 3.771 0 5.657 1.172 6.828S6.227 22 9.998 22h2c.736 0 1.4 0 2-.009M6.998 7h8m-8 5h7m-7 5h5"></svg:path><svg:path d="M19.005 19v3m-2.995-4.5c.143.814 1.18 1.156 2.396 1.392c.111.022 1.03-.025 1.14-.044c.888-.154 2.513-.456 2.454-1.348c-.07-1.05-.848-1.403-1.555-2.039c-.29-.26-.33-.684-.156-1.033l.402-.807c.187-.373.132-.836-.187-1.104c-.472-.395-.874-.518-1.5-.517c-.711.07-1.127.214-1.515.527c-.318.256-.361.712-.179 1.077l.386.774c.187.374.123.827-.19 1.104c-.812.716-1.633 1.236-1.496 2.018"></svg:path></svg:g>`,
})
export class HugeiconsLicensePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
