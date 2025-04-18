import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBattlenetIcon],svg[arcticons-battlenet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.312 27.495c-2.38 3.966-2.89 9.858-.453 11.728s8.386 2.096 19.264-10.652a28.4 28.4 0 0 0 7.083-20.284"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.08 32.942c4.625.078 9.983-2.427 10.384-5.472s-2.377-8.31-18.856-11.357A28.4 28.4 0 0 0 3.5 20.122"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.414 12.233c-2.245-4.044-7.093-7.432-9.93-6.257s-6.008 6.214-.407 22.009A28.4 28.4 0 0 0 31.102 44.26"></svg:path>`,
})
export class ArcticonsBattlenetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
