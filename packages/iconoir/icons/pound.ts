import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPoundIcon],svg[iconoir-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.667 13.6c-1.111 2.667-2.778 5.333-5 6.4h10.555S17.89 20 19 18.933M15.111 13.6H4m13.333-4.8c0-2.651-2.238-4.8-5-4.8s-5 2.149-5 4.8s2.239 4.8 5 4.8"></svg:path>`,
})
export class IconoirPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
