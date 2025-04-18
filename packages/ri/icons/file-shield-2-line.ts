import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileShield2LineIcon],svg[ri-file-shield-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9V4H5v16h6.056a5 5 0 0 0 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 12 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36l2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z"></svg:path>`,
})
export class RiFileShield2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
