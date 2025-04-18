import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarFlatbedTankIcon],svg[mdi-train-car-flatbed-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.22 15c.48-.53.78-1.23.78-2c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3c0 .77.3 1.47.78 2H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2zM19 12c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m8.62-6l-.4-2H22v2zM20 9H4V8h2l1-5h5l1 5h7z"></svg:path>`,
})
export class MdiTrainCarFlatbedTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
