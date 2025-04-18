import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTigpsIcon],svg[arcticons-tigps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.242 4.094a34.48 34.48 0 0 1-16.366 14.293h4.92c.898 6.414-9.895 17.887 8.685 16.61l-2.008 8.458l7.42.451l5.232-21.99l-7.43-.451s-1.627 8.375-2.16 8.987c-1.468 1.686-4.327.04-3.664-3.59l2-8.475l4.54.066l.942-3.97l-4.53-.133Z"></svg:path>`,
})
export class ArcticonsTigpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
