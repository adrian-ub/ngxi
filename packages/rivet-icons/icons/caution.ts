import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCautionIcon],svg[rivet-icons-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 10V6h2v4zm1 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M6.382 0h3.236L16 12.764V16H0v-3.236zm1.236 2L2 13.236V14h12v-.764L8.382 2z"></svg:path></svg:g>`,
})
export class RivetIconsCautionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
