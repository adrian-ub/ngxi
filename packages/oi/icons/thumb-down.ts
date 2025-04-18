import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiThumbDownIcon],svg[oi-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v4h1V0zm2 0v4c.28 0 .53.09.72.28S3.87 6.4 4 6.66s.39.39.66.31c.26-.08.4-.36.31-.63c-.08-.26-.47-1.59-.47-1.84S4.72 4 5 4h1.5c.28 0 .5-.22.5-.5S5.97.31 5.97.31A.52.52 0 0 0 5.5 0z"></svg:path>`,
})
export class OiThumbDownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
