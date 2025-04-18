import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPunchingBall02Icon],svg[hugeicons-punching-ball-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.69 18.5H9.31c-.68 0-1.307.385-1.645 1.008l-.539.996c-.36.666.095 1.496.823 1.496h8.102c.728 0 1.184-.83.823-1.496l-.54-.996c-.337-.623-.964-1.008-1.644-1.008M12 12v6.5M12 2C9.515 2 7.5 3.178 7.5 5.846c0 2.335 2.01 2.903 3.015 5.103c.144.316.217.474.263.545c.205.312.402.437.774.493c.084.013.206.013.448.013s.364 0 .448-.013c.372-.056.568-.18.773-.492c.047-.071.12-.23.264-.546C14.49 8.754 16.5 8.202 16.5 5.846C16.5 3.154 14.485 2 12 2" color="currentColor"></svg:path>`,
})
export class HugeiconsPunchingBall02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
