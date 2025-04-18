import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsPSquareIcon],svg[vs-p-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0h1120q139 0 237.5 98.5T1792 336v1120q0 139-98.5 237.5T1456 1792H336q-139 0-237.5-98.5T0 1456V336Q0 197 98.5 98.5T336 0m339 1054h334q147 0 251-110t104-267q0-154-102-266q-104-112-253-112H502q-30 0-52 22t-22 53v1044q0 31 22 53t52 22h98q31 0 53-22t22-53zm0-531h334q50 0 85 45t35 109q0 63-35.5 108t-84.5 45H675z"></svg:path>`,
})
export class VsPSquareIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
