import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCinemaIcon],svg[maki-cinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7.5v2a.5.5 0 0 1-1 0s.06-.5-1-.5h-1v2.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5V8h1c1.06 0 1-.5 1-.5a.5.5 0 0 1 1 0M4 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4.5-4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m0 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class MakiCinemaIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
