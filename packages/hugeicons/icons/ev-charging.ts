import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEvChargingIcon],svg[hugeicons-ev-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22V7c0-2.357 0-3.536.732-4.268S5.643 2 8 2h3c2.357 0 3.536 0 4.268.732S16 4.643 16 7v15M2 22h15M3 11h13m5-2.473l.447-.222c.27-.133.404-.2.478-.319c.075-.12.075-.268.075-.566v-.694c0-.643 0-.965-.174-1.113a.5.5 0 0 0-.19-.101c-.222-.062-.493.117-1.034.474c-.695.458-1.042.687-1.264 1.014a2 2 0 0 0-.186.345C19 7.708 19 8.12 19 8.947v1.633c0 .232.19.42.425.42a.85.85 0 0 0 .789-.528z"></svg:path><svg:path d="M19.478 11c.2 1.386.667 2.97.477 4.38c-.171 1.277-1.182 2.308-2.512 2.561C17.133 18 16.755 18 16 18m-5.75-4l-1.946 1.917c-.237.257-.356.385-.282.484c.073.099.287.099.715.099h1.525c.429 0 .643 0 .716.099c.074.1-.045.227-.282.484L8.737 19"></svg:path></svg:g>`,
})
export class HugeiconsEvChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
