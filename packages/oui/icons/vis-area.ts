import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisAreaIcon],svg[oui-vis-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h10V9.913l-2.571-2.826L8.56 8.753a.5.5 0 0 1-.728-.067L4.448 4.317L3 6.191zm5.295-5.35l1.837-1.64a.5.5 0 0 1 .703.037l3.035 3.336a.5.5 0 0 1 .13.337v3.78a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6.02a.5.5 0 0 1 .104-.305l1.947-2.52a.5.5 0 0 1 .791-.001zM1 15h13.5a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 1 0z"></svg:path>`,
})
export class OuiVisAreaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
