import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGlassIcon],svg[picon-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1l1 2h4l1-2M2 8L0 0h8L6 8"></svg:path>`,
})
export class PiconGlassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
