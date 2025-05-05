import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJeanIcon],svg[picon-jean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V0h6v8H5c0-8-2-8-2 0"></svg:path>`,
})
export class PiconJeanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
