import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPanelGlassDoorOpenIcon],svg[cbi-panel-glass-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.855 3.068l-12.003.002l.002 1.043h.035l-.014 18.985l.014-18.985l-9.385.014s-.026 12.747.021 18.97v.76h21.33ZM12.41 4.098h9.342V23.02l-9.342.016zM5.055 6.223h2.97v14.111h-2.97Zm.29.28v13.52h2.409V6.503Zm.446.45h1.5v12.61h-1.5z"></svg:path>`,
})
export class CbiPanelGlassDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
