import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaShieldAlertOutlineIcon],svg[cuida-shield-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="shield-alert-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M11.061 2.36a2.9 2.9 0 0 1 1.878 0l6 2.045a2.91 2.91 0 0 1 1.97 2.753v7.894a2.91 2.91 0 0 1-1.408 2.492l-6 3.613a2.91 2.91 0 0 1-3.002 0l-6-3.613a2.91 2.91 0 0 1-1.408-2.492V7.158a2.91 2.91 0 0 1 1.97-2.753zm1.291 1.72a1.1 1.1 0 0 0-.704 0l-6 2.046a1.09 1.09 0 0 0-.739 1.032v7.894c0 .382.2.737.528.934l6 3.614c.346.208.78.208 1.126 0l6-3.614a1.09 1.09 0 0 0 .528-.934V7.158a1.09 1.09 0 0 0-.739-1.032z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 13a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path d="M11 15a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaShieldAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
