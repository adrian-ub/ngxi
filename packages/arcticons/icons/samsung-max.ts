import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungMaxIcon],svg[arcticons-samsung-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.024 40h-8.667L12.976 8h9.381zM42.5 40h-8.667l-4.857-21.571h9.381zm-37-14.857L16.976 40H7.643zm23.476-6.714l-2.512 6.714M30.024 40l2.239-6.974M16.976 40l1.556-10.786m-9.078 1.048L12.976 8"></svg:path>`,
})
export class ArcticonsSamsungMaxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
