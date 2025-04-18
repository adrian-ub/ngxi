import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCenterFocusIcon],svg[cil-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 496h120v-32H64a16.02 16.02 0 0 1-16-16V328H16v120a48.054 48.054 0 0 0 48 48M48 64a16.02 16.02 0 0 1 16-16h120V16H64a48.054 48.054 0 0 0-48 48v120h32Zm400-48H328v32h120a16.02 16.02 0 0 1 16 16v120h32V64a48.054 48.054 0 0 0-48-48m16 432a16.02 16.02 0 0 1-16 16H328v32h120a48.054 48.054 0 0 0 48-48V328h-32Zm-64-192c0-79.4-64.6-144-144-144s-144 64.6-144 144s64.6 144 144 144s144-64.6 144-144M256 368a112 112 0 1 1 112-112a112.127 112.127 0 0 1-112 112"></svg:path>`,
})
export class CilCenterFocusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
