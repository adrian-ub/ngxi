import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTedIcon],svg[arcticons-ted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M20.811 30.226h6.226m-6.226-12.452h6.226M20.811 24h4.059m-4.059-6.226v12.452"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.25 30.226V17.774h2.802a5.45 5.45 0 0 1 5.448 5.448v1.556a5.45 5.45 0 0 1-5.448 5.448zM9.5 17.774h8.25m-4.125 12.452V17.774"></svg:path>`,
})
export class ArcticonsTedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
