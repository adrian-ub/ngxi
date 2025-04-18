import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSaveIcon],svg[foundation-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.872 17.026h10.352v21.471H52.872z"></svg:path><svg:path fill="currentColor" d="m86.217 19.195l.006-.006l-5.211-5.212a2.38 2.38 0 0 0-1.76-.785c-.014 0-.026.004-.04.004h-9.087v.024c-.286.029-.564.128-.779.344a1.25 1.25 0 0 0-.343.779h-.028v25.306h-.009a2.38 2.38 0 0 1-2.378 2.3H32.135v-.012a2.373 2.373 0 0 1-2.259-2.288h-.009V14.343h-.048a1.4 1.4 0 0 0-.367-.735a1.37 1.37 0 0 0-1.119-.387v-.028H15.382a2.385 2.385 0 0 0-2.386 2.388v68.841a2.384 2.384 0 0 0 2.387 2.386h7.57V53.801h.009a2.385 2.385 0 0 1 1.92-2.255v-.013h.132c.108-.015.215-.032.326-.032h49.387v.009a2.375 2.375 0 0 1 2.292 2.291h.009v33.007h7.581a2.386 2.386 0 0 0 2.387-2.386V21.029c.001-.025.007-.048.007-.073a2.37 2.37 0 0 0-.786-1.761"></svg:path>`,
})
export class FoundationSaveIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
