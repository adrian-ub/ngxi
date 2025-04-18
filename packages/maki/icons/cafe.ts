import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCafeIcon],svg[maki-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h-2V3H2v4a4 4 0 0 0 7.45 2H12a2 2 0 1 0 0-4m0 3H9.86A4 4 0 0 0 10 7V6h2a1 1 0 1 1 0 2m-2 4.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class MakiCafeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
