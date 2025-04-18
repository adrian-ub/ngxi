import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLaptopIcon],svg[lineicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.2 53.7l-4-17.3c.2-.3.3-.7.3-1v-23c0-3.4-2.8-6.3-6.3-6.3H11.8c-3.4 0-6.3 2.8-6.3 6.3v23c0 .3.1.7.2.9l-4 17.5c-.2 1 .1 2 .8 2.8s1.7 1.3 2.8 1.3h53.4c1.1 0 2.2-.5 2.8-1.4c.7-.8.9-1.9.7-2.8M10.1 12.4c0-1 .8-1.8 1.8-1.8h40.3c1 0 1.8.8 1.8 1.8v20.8H10.1zm-3.6 41l3.6-15.7h43.7l3.6 15.7z"></svg:path>`,
})
export class LineiconsLaptopIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
