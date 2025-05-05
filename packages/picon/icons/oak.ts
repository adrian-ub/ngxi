import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOakIcon],svg[picon-oak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8H3V5C-8-1 16-1 5 5"></svg:path>`,
})
export class PiconOakIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
