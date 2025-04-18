import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarTankIcon],svg[mdi-train-car-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v2h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1v-2zm-2-7h-6V7H9v1H3c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h18c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTrainCarTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
