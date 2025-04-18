import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFourBoxIcon],svg[subway-four-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512h232.7V279.3H0zm0-279.3h232.7V0H0zM279.3 512H512V279.3H279.3zm0-512v232.7H512V0z"></svg:path>`,
})
export class SubwayFourBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
