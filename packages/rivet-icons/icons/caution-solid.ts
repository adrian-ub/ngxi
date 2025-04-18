import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCautionSolidIcon],svg[rivet-icons-caution-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 0h3.236L16 12.764V16H0v-3.236zM7 6v4h2V6zm1 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RivetIconsCautionSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
