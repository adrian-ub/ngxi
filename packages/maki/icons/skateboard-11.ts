import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSkateboard11Icon],svg[maki-skateboard-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 6H3a2.002 2.002 0 0 1-2-2h1a1.001 1.001 0 0 0 1 1h5a1.001 1.001 0 0 0 1-1h1a2.002 2.002 0 0 1-2 2zm0 1a1 1 0 1 0 1 1a1 1 0 0 0-1-1zM3 7a1 1 0 1 0 1 1a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class MakiSkateboard11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
