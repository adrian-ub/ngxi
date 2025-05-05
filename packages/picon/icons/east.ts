import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEastIcon],svg[picon-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4L3 6V2"></svg:path>`,
})
export class PiconEastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
