import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatch02Icon],svg[hugeicons-watch-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 12c0-2.828 0-4.243.879-5.121C7.757 6 9.172 6 12 6s4.243 0 5.121.879C18 7.757 18 9.172 18 12s0 4.243-.879 5.121C16.243 18 14.828 18 12 18s-4.243 0-5.121-.879C6 16.243 6 14.828 6 12m10-6l-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L8 6m0 12l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L16 18"></svg:path><svg:path d="M12 10v2.005L13 13"></svg:path></svg:g>`,
})
export class HugeiconsWatch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
