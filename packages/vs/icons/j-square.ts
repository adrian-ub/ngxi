import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsJSquareIcon],svg[vs-j-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0h1120q139 0 237.5 98.5T1792 336v1120q0 139-98.5 237.5T1456 1792H336q-139 0-237.5-98.5T0 1456V336Q0 197 98.5 98.5T336 0m562 1221q-103 0-155.5-40T690 1051v-84q0-31-22-53t-53-22H466q-31 0-53 22t-22 53v48q0 58 16.5 120t55.5 127t95 115.5t144.5 83T898 1493t195.5-32.5t144.5-83t94.5-115.5t55-127t16.5-120V374q0-31-21.5-53t-52.5-22h-149q-31 0-53 22t-22 53v677q0 90-52.5 130T898 1221"></svg:path>`,
})
export class VsJSquareIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
