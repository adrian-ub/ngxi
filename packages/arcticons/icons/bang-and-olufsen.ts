import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBangAndOlufsenIcon],svg[arcticons-bang-and-olufsen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="28.884" cy="29.69" r="6.262" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.854 26.813c4.904 0 7.93-3.316 7.93-7.407S17.758 12 12.854 12v23.95c4.127.379 6.075-1.486 6.075-4.569s-1.948-4.948-6.075-4.57m17.313-14.233a1.743 1.743 0 1 0-2.465 2.465l5.34 5.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.041 16.673l-3.198 3.199a1.743 1.743 0 1 1-2.465-2.465l1.344-1.344"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBangAndOlufsenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
