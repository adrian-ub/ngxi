import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidkdiIcon],svg[arcticons-fdroidkdi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.5 9.5h-29a2.08 2.08 0 0 0-2 2v25a2.08 2.08 0 0 0 2 2h37a2.08 2.08 0 0 0 2-2v-17H37a2.81 2.81 0 0 1-2.5-2.5Z"></svg:path><svg:circle cx="20" cy="24" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m44.5 19.5l-10-10"></svg:path><svg:circle cx="20" cy="17.74" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 21.93v9.08"></svg:path>`,
})
export class ArcticonsFdroidkdiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
