import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhpIcon],svg[hugeicons-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M5 12v-2a.5.5 0 0 1 .5-.5h1.25a1.25 1.25 0 1 1 0 2.5zm0 0v2.5M16 12v-2a.5.5 0 0 1 .5-.5h1.25a1.25 1.25 0 1 1 0 2.5zm0 0v2.5m-5.5-5V12m0 2.5V12m3-2.5V12m0 2.5V12m-3 0h3"></svg:path></svg:g>`,
})
export class HugeiconsPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
