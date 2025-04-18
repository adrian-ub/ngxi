import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBoldIcon],svg[solar-chef-hat-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18v-3.416A5 5 0 0 1 2 10m7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
