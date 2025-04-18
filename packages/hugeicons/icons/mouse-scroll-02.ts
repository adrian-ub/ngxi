import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseScroll02Icon],svg[hugeicons-mouse-scroll-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2S4.5 6.51 4.5 12S6 22 12 22m-.012-15.161v4.92"></svg:path><svg:path d="M9.996 7.859c.984-1.02 1.584-1.92 2.04-1.856c.384-.003.744.596 1.968 1.856m0 3.281c-.984 1.02-1.584 1.92-2.04 1.856c-.384.003-.744-.595-1.968-1.855"></svg:path></svg:g>`,
})
export class HugeiconsMouseScroll02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
