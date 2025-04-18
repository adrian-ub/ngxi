import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMouseOutlineIcon],svg[material-symbols-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.9 0-4.95-2.05T5 15V9q0-2.9 2.05-4.95T12 2t4.95 2.05T19 9v6q0 2.9-2.05 4.95T12 22m1-13h4q0-1.8-1.137-3.175T13 4.1zM7 9h4V4.1q-1.725.35-2.863 1.725T7 9m5 11q2.075 0 3.538-1.463T17 15v-4H7v4q0 2.075 1.463 3.538T12 20m0-9"></svg:path>`,
})
export class MaterialSymbolsMouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
