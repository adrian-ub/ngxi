import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileShieldFillIcon],svg[ri-file-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v13.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999zM8 8v5.6c0 .85.446 1.643 1.187 2.114L12 17.5l2.813-1.786A2.51 2.51 0 0 0 16 13.6V8zm2 2h4v3.6c0 .158-.09.318-.26.425L12 15.131l-1.74-1.106A.51.51 0 0 1 10 13.6z"></svg:path>`,
})
export class RiFileShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
