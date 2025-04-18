import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarIntermodalIcon],svg[mdi-train-car-intermodal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-4H3v4H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2zm-5-1H8v-1h8zm5-9H3v5h18zm-5 3H8V7h8z"></svg:path>`,
})
export class MdiTrainCarIntermodalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
