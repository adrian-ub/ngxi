import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFstopIcon],svg[arcticons-fstop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="11.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.429" cy="17.668" r="2.369" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.162 26.176l4.197-3.833l4.257 3.712l.3.312l6.86-6.486l6.072 6.071m-13.028.461l-5.89 5.462"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.976 35.108l2.589 9.659m-8.541-31.875l-2.589-9.659m16.673 23.743l9.659 2.589m-31.875-8.541l-9.659-2.589m28.899-2.567l7.071-7.071M15.868 32.132l-7.071 7.071"></svg:path>`,
})
export class ArcticonsFstopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
