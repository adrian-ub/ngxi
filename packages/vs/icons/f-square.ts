import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsFSquareIcon],svg[vs-f-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 1h1120q139 0 237.5 98t98.5 237v1120q0 139-98.5 237.5T1456 1792H336q-139 0-237.5-98.5T0 1456V336Q0 197 98.5 99T336 1m339 545h584q31 0 53-21.5t22-52.5v-98q0-31-22-53t-53-22H502q-30 0-52 22t-22 53v1045q0 31 22 52.5t52 21.5h98q31 0 53-21.5t22-52.5v-399h476q31 0 52.5-22t21.5-53v-98q0-31-21.5-53t-52.5-22H675z"></svg:path>`,
})
export class VsFSquareIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
