import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGrimaceSolidIcon],svg[la-grimace-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M12 17c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 2h1v2h-1a1 1 0 0 1 0-2m3 0h2v2h-2zm4 0h1a1 1 0 0 1 0 2h-1z"></svg:path>`,
})
export class LaGrimaceSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
