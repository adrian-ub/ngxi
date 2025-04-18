import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilAsanaOutlineIcon],svg[basil-asana-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.47 3.554a4 4 0 1 1 3.06 7.391a4 4 0 0 1-3.06-7.39M12 4.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-6.53 7.805a4 4 0 1 1 3.061 7.391a4 4 0 0 1-3.062-7.392M7 13.75a2.5 2.5 0 1 0 0 5.001a2.5 2.5 0 0 0 0-5.001m10-1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.957 1.69a2.5 2.5 0 1 1 1.914 4.62a2.5 2.5 0 0 1-1.914-4.62" clip-rule="evenodd"></svg:path>`,
})
export class BasilAsanaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
