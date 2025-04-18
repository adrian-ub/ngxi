import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMacaveIcon],svg[arcticons-macave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.898 5.576c9.719 0 17.602 7.882 17.602 17.602c0 9.733-7.882 17.615-17.602 17.615S7.296 32.91 7.296 23.178c0-9.72 7.882-17.602 17.602-17.602M5.5 42.424l6.84-6.648"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.73 39.71V27.468c-.302-4.29 3.467-4.29 3.467-8.197v-7.623h2.839v7.623c0 3.907 3.715 3.907 3.715 8.197V39.71m-10.02-10.706h10.02m-10.02 6.099h10.02"></svg:path>`,
})
export class ArcticonsMacaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
