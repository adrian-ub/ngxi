import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feLaptopIcon],svg[fe-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2M5 6v8h14V6zm0-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class FeLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
