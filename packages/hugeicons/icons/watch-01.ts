import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatch01Icon],svg[hugeicons-watch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:path d="m16 6l-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L8 6m0 12l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L16 18m-4-8v2.005L13 13"></svg:path></svg:g>`,
})
export class HugeiconsWatch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
