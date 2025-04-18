import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelGreenIcon],svg[raphael-green-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.485 2c0 8-18 4-18 20c0 6 2 8 2 8h2s-3-2-3-8c0-4 9-8 9-8s-7.98 4.328-7.98 8.436C21.238 24.43 28.287 9.606 24.484 2z"></svg:path>`,
})
export class RaphaelGreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
