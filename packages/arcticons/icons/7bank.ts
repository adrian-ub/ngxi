import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons7bankIcon],svg[arcticons-7bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.812 31.978a60.4 60.4 0 0 0-.175 11.522h10.909c.233-3.905.212-7.828.44-11.524m1.674-9.464a14.5 14.5 0 0 1 7.022-8.194V4.5c-6.352 3.123-14.286 8.315-17.664 18.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.318 4.5v8.932l13.108-.068c3.065-3.94 8.092-6.622 12.256-8.864zm12.485 25.573v-5.658l3.748 5.658v-5.658m-12.966 2.829a1.415 1.415 0 1 1 0 2.83H12.25v-5.66h2.335a1.415 1.415 0 1 1 0 2.83m0 0h-2.332m8.902.955h-2.507m-.621 1.874l1.874-5.658l1.874 5.658m7.805-5.649v5.659m0-1.971l3.041-3.669m0 5.64l-2.327-2.829"></svg:path>`,
})
export class Arcticons7bankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
