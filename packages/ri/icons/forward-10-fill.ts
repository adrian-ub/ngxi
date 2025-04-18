import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riForward10FillIcon],svg[ri-forward-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10h-2a8 8 0 1 1-1.865-5.135l-1.997 1.997A2.5 2.5 0 0 0 12 10.75v2.5a2.5 2.5 0 0 0 5 0v-2.5c0-.681-.273-1.3-.715-1.75H22V3l-2.447 2.446A9.98 9.98 0 0 0 12 2m3.5 8.75v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z"></svg:path>`,
})
export class RiForward10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
