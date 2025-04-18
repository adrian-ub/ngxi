import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHandUpIcon],svg[icon-park-solid-hand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M41 38H19v6h22z"></svg:path><svg:path d="M19 38Q9.221 27.316 7.778 25.616c-1.443-1.7-.837-3.62 2.775-3.62s5.695 5.285 8.447 5.285q.025.006.003-20.277A3 3 0 0 1 22.001 4h.003a3.004 3.004 0 0 1 3.005 3.004v8.01q11.958 1.812 13.003 2C39.057 17.202 41 18.2 41 21.068V38z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSolidHandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
