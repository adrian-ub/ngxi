import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMonogramIcon],svg[cib-monogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.875 0v31.339c0 .599-.708.891-1.104.448L1.126 0zM14.703 17.948L2.23 31.787c-.396.443-1.104.151-1.104-.448V0z"></svg:path>`,
})
export class CibMonogramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
