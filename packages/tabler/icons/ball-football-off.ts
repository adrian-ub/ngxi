import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallFootballOffIcon],svg[tabler-ball-football-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.041 16.046A9 9 0 0 0 7.957 3.956M5.634 5.639a9 9 0 0 0 12.726 12.73"></svg:path><svg:path d="m12 7l4.755 3.455l-.566 1.743l-.98 3.014L15 16H9l-1.755-5.545l1.86-1.351l2.313-1.681zm0 0V3m3 13l2.5 3m-.745-8.545L20.5 9M9.061 16.045L6.5 19m.745-8.545L3.5 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBallFootballOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
