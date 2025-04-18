import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLaptopIcon],svg[proicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 7a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v9H4.75zm-2 10a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2z"></svg:path>`,
})
export class ProiconsLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
