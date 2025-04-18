import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciRedoIcon],svg[ci-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h5V3m-.29 13.357a8 8 0 1 1-.19-8.991"></svg:path>`,
})
export class CiRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
