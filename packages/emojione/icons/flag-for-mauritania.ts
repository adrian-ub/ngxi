import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMauritaniaIcon],svg[emojione-flag-for-mauritania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#699635"></svg:circle><svg:g fill="#ffce31"><svg:path d="M47.7 28.8c-1.5 7.3-7.9 12.8-15.7 12.8s-14.2-5.5-15.7-12.8c-.2 1-.3 2.1-.3 3.2c0 8.8 7.2 16 16 16s16-7.2 16-16c0-1.1-.1-2.2-.3-3.2"></svg:path><svg:path d="m26.6 32l5.4-3.8l5.4 3.8l-2-6.1l5.4-3.9h-6.7L32 16l-2 6h-6.8l5.4 3.9z"></svg:path></svg:g>`,
})
export class EmojioneFlagForMauritaniaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
