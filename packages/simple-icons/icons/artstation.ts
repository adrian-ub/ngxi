import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsArtstationIcon],svg[simple-icons-artstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 17.723l2.027 3.505h.001a2.42 2.42 0 0 0 2.164 1.333h13.457l-2.792-4.838zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.42 2.42 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467m-11.129-3.462L7.428 4.858l-5.444 9.428z"></svg:path>`,
})
export class SimpleIconsArtstationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
