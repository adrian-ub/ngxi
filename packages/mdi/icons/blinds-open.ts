import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlindsOpenIcon],svg[mdi-blinds-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1h-6v2.17A3 3 0 0 1 15 13c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.31.84-2.42 2-2.83V8H5c-.55 0-1-.45-1-1V6H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1m9 10c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiBlindsOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
