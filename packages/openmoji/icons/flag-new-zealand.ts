import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNewZealandIcon],svg[openmoji-flag-new-zealand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m52.594 27.262l1.723-1.325l-2.093.052l-.599-2.061l-.694 2.093l-2.092.051l1.663 1.242l-.695 2.092l1.723-1.325l1.663 1.242zm0 18l1.723-1.325l-2.093.052l-.599-2.061l-.694 2.093l-2.092.051l1.663 1.242l-.695 2.092l1.723-1.325l1.663 1.242zm8-13l1.723-1.325l-2.093.052l-.599-2.061l-.694 2.093l-2.092.051l1.663 1.242l-.695 2.092l1.723-1.325l1.663 1.242zm-15 2l1.723-1.325l-2.093.052l-.599-2.061l-.694 2.093l-2.092.051l1.663 1.242l-.695 2.092l1.723-1.325l1.663 1.242z"></svg:path><svg:path fill="#d22f27" d="m52.505 27.211l1.573-1.21l-1.91.047l-.547-1.881l-.634 1.91l-1.909.047l1.518 1.133l-.634 1.91l1.572-1.209l1.518 1.133zm0 18l1.573-1.21l-1.91.047l-.547-1.881l-.634 1.91l-1.909.047l1.518 1.133l-.634 1.91l1.572-1.209l1.518 1.133zm8-13l1.573-1.21l-1.91.047l-.547-1.881l-.634 1.91l-1.909.047l1.518 1.133l-.634 1.91l1.572-1.209l1.518 1.133zm-15 2l1.573-1.21l-1.91.047l-.547-1.881l-.634 1.91l-1.909.047l1.518 1.133l-.634 1.91l1.572-1.209l1.518 1.133z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNewZealandIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
