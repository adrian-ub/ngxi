import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDharmaIcon],svg[arcticons-dharma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5A18.5 18.5 0 0 1 42.5 24v16.5a2 2 0 0 1-2 2h-33a2 2 0 0 1-2-2V24A18.5 18.5 0 0 1 24 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.83 11.384a13.465 13.465 0 0 1 13.465 13.465V42.5h0h-26.93h0V24.849A13.465 13.465 0 0 1 23.83 11.384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.819 28.922a5.29 5.29 0 0 1 5.29 5.29V42.5h0h-10.58h0v-8.288a5.29 5.29 0 0 1 5.29-5.29"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.546 20.427a9.636 9.636 0 0 1 9.636 9.636V42.5h0H15.91h0V30.063a9.636 9.636 0 0 1 9.636-9.636"></svg:path>`,
})
export class ArcticonsDharmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
