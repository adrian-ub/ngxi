import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandGrabIcon],svg[streamline-hand-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.364 13.5v-1.496l-1.926-1.54a2 2 0 0 1-.71-1.167l-.53-2.647a1.994 1.994 0 0 1 1.216-2.243l.952-.38V2.494A1.995 1.995 0 0 1 5.772.544l5.485 1.154A1.994 1.994 0 0 1 12.84 3.65v3.008c0 1.548-.36 3.075-1.053 4.46l-.443.886V13.5M3.366 4.026V6.52"></svg:path>`,
})
export class StreamlineHandGrabIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
