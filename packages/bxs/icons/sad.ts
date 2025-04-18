import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSadIcon],svg[bxs-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m-5 8.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 7 10.5M8 17s1-3 4-3s4 3 4 3zm7.493-5.014a1.494 1.494 0 1 1 .001-2.987a1.494 1.494 0 0 1-.001 2.987"></svg:path>`,
})
export class BxsSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
