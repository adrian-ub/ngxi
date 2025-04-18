import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTollIcon],svg[material-symbols-light-toll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.003 19q-2.93 0-4.966-2.033T8 12.003t2.034-4.966T14.997 5t4.967 2.034T22 11.997t-2.033 4.967T15.003 19M7 18.712q-2.266-.604-3.633-2.475T2 12t1.367-4.236T7 5.288V6.35q-1.8.625-2.9 2.175T3 12t1.1 3.475T7 17.65z"></svg:path>`,
})
export class MaterialSymbolsLightTollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
