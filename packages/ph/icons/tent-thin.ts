import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTentThinIcon],svg[ph-tent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.66 190.38l-64-144A4 4 0 0 0 184 44H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 196h240a4 4 0 0 0 3.66-5.62M68 66.85V188H14.16ZM76 188V66.85L129.84 188Zm62.6 0L78.16 52H181.4l60.44 136Z"></svg:path>`,
})
export class PhTentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
