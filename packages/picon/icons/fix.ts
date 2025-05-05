import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFixIcon],svg[picon-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8L0 6l6-6c-9-1 3 11 2 2"></svg:path>`,
})
export class PiconFixIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
