import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPanelGlassDoorCloseIcon],svg[cbi-panel-glass-door-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 2.14l-11.98.03v20H1.37v.76H22.7Zm-11.32.473h10.47v20.229H11.38zm0 0v20.229h10.47V2.613Zm3.75 2.367h2.97v14.11h-2.97zm.29.28v13.52h2.41V5.26Zm.44.47h1.5v12.61h-1.5z"></svg:path>`,
})
export class CbiPanelGlassDoorCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
