import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCastleTurretFillIcon],svg[ph-castle-turret-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 216h-16V115.31L211.31 104A15.86 15.86 0 0 0 216 92.69V48a16 16 0 0 0-16-16h-20a8 8 0 0 0-8 8v24h-24V40a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v24H84V40a8 8 0 0 0-8-8H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 104L56 115.31V216H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-104-48a16 16 0 0 1 32 0v48h-32Z"></svg:path>`,
})
export class PhCastleTurretFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
