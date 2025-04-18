import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPacMan256Icon],svg[arcticons-pac-man256-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.363 25.565L3.5 27.764c4.689 10.109 15.484 18.245 28.843 15.765c10.775-2 12.941-14.895 6.86-24.067c-5.075-7.657-12.132-12.181-22.626-12.39c-5.42-.107-10.069 1.908-12.776 6.84Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.787 34.444c2.984-5.146 1.847-12.694-1.69-18.03C36.02 8.757 28.963 4.234 18.47 4.026c-5.42-.108-10.069 1.907-12.776 6.84M3.5 27.764l1.893-3.048M3.801 13.912l1.893-3.047m12.871 12.316L5.393 24.716m35.076 13.356l2.318-3.628"></svg:path>`,
})
export class ArcticonsPacMan256Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
