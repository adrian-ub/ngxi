import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRarIcon],svg[arcticons-rar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 6.5H7.5a2 2 0 0 0-2 2v7.67a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2H30M18 18.17H7.5a2 2 0 0 0-2 2v7.66a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2v-7.66a2 2 0 0 0-2-2H30"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 29.83H7.5a2 2 0 0 0-2 2v7.67a2 2 0 0 0 2 2H18m12 0h10.5a2 2 0 0 0 2-2v-7.67a2 2 0 0 0-2-2H30m-20.63-14v-7m0 18.67v-7m0 18.67v-7"></svg:path><svg:rect width="12" height="39" x="18" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30 15.33a6 6 0 1 0-12 0m0 .89h12v3.88H18z"></svg:path>`,
})
export class ArcticonsRarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
