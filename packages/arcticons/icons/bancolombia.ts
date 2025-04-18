import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBancolombiaIcon],svg[arcticons-bancolombia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.262 12.81c8.345-3.3 12.937-4.205 21.54-5.305M5.5 30.469c8.603-5.952 22.51-9.445 37-10.803M18.825 40.495c7.31-4.01 15.783-5.887 23.675-7.18"></svg:path>`,
})
export class ArcticonsBancolombiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
