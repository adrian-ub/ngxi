import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedIcon],svg[mdi-train-car-flatbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15v2h-1c0 1.11-.89 2-2 2s-2-.89-2-2H6c0 1.11-.89 2-2 2s-2-.89-2-2H1v-2z"></svg:path>`,
})
export class MdiTrainCarFlatbedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
