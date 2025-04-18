import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiVanguardIcon],svg[cbi-vanguard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.26 2.173v-.21h6.802l4.879 14.251l3.602-11.436s.734-1.923-1.242-2.692v-.158h5.439l-6.872 20.144L12 20.97s-2.326-.682-3.55-4.161L3.974 4.446c.018 0-.56-1.993-1.714-2.273"></svg:path>`,
})
export class CbiVanguardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
