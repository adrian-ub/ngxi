import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineExpandMoreIcon],svg[ic-outline-expand-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z"></svg:path>`,
})
export class IcOutlineExpandMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
