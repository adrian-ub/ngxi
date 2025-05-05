import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCollumnIcon],svg[picon-collumn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V0h2v8M0 8V0h2v8m4 0V0h2v8"></svg:path>`,
})
export class PiconCollumnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
