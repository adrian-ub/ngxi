import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReducedInequalitiesIcon],svg[streamline-reduced-inequalities-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.733 6.91l2.45-2.45v4.9zm12.477 0l-2.45-2.45v4.9zM5.112 5.516h3.72m-3.72 2.79h3.72m-1.86 4.844l-2.45-2.45h4.9zm0-12.479l-2.45 2.45h4.9z"></svg:path>`,
})
export class StreamlineReducedInequalitiesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
