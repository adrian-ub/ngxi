import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[brandicoBandcampIcon],svg[brandico-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 791.667h694.444L1000 208.333H333.334z"></svg:path>`,
})
export class BrandicoBandcampIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
