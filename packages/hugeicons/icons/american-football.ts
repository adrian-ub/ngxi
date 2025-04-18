import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAmericanFootballIcon],svg[hugeicons-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.3 6.052a4.215 4.215 0 0 0-3.365-3.365c-4.197-.699-8.606.574-11.636 3.599C3.27 9.31 1.99 13.716 2.685 17.912a4.22 4.22 0 0 0 3.365 3.365c4.171.797 8.65-.574 11.642-3.598c3.058-3.006 4.337-7.43 3.609-11.627M4 20L20 4M9 12l3 3m0-6l3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsAmericanFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
