import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundMachineIcon],svg[arcticons-sound-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.354" ry="5.69"></svg:ellipse><svg:ellipse cx="24" cy="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.354" ry="5.69"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.646 14S5.108 28.357 4.518 32.912C4.038 36.624 13.24 39.69 24 39.69s19.966-3.066 19.482-6.778C42.862 28.17 40.354 14 40.354 14m-4.614 7.651l3.328 11.84M9.729 21.651l3.328 11.84"></svg:path><svg:ellipse cx="24" cy="35.219" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.036" ry="2.112"></svg:ellipse><svg:ellipse cx="24.038" cy="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.828" ry="1.502"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.592 14h.882m-18.872 0h.882m8.554 3.25v.335m0-7.171v.336"></svg:path>`,
})
export class ArcticonsSoundMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
