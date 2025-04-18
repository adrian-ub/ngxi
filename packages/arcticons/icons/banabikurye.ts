import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBanabikuryeIcon],svg[arcticons-banabikurye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.622 16.5v11m0-2.309l4.888-5.024m-3.259 3.395l3.803 3.802m-22.108-4.539a2.76 2.76 0 0 1 2.75-2.75h0a2.76 2.76 0 0 1 2.75 2.75v1.788a2.76 2.76 0 0 1-2.75 2.75h0a2.76 2.76 0 0 1-2.75-2.75m0 2.887v-11m8.357 6.325a2.76 2.76 0 0 1 2.75-2.75h0a2.76 2.76 0 0 1 2.75 2.75v1.788a2.76 2.76 0 0 1-2.75 2.75h0a2.76 2.76 0 0 1-2.75-2.75m0 2.887v-11"></svg:path>`,
})
export class ArcticonsBanabikuryeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
