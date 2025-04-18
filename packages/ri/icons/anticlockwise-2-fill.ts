import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwise2FillIcon],svg[ri-anticlockwise-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h2a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-2v3L9 5l5-4zm1 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiAnticlockwise2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
