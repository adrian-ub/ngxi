import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSectographIcon],svg[arcticons-sectograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.431 25.549c1.728-1.728 6.345-13.409 6.345-13.409s-9.629 4.986-12.198 7.556c-2.255 2.255-2.017 4.71-.61 6.116c1.853 1.853 4.24 1.96 6.463-.263M2.529 23.774l14.73.05c0 4.531 2.199 7.083 6.886 7.083l.16 14.59"></svg:path><svg:circle cx="24.823" cy="23.147" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSectographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
