import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBaby0203AltOutline24pxIcon],svg[healthicons-baby-0203-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M15.196 7.984q-.095.105-.196.203a4.32 4.32 0 0 1-6.196-.203L7.629 6.692A.362.362 0 0 0 7 6.935V17a5 5 0 0 0 9.2 2.714a1 1 0 0 0 .27-.473A5 5 0 0 0 17 17V6.935a.362.362 0 0 0-.63-.243zM15 15.18v-4.537a6.3 6.3 0 0 1-3.083.755c.37.394.746.808 1.114 1.233A26 26 0 0 1 15 15.181m-6-3.897V17a3 3 0 0 0 5.473 1.7c-.08-.475-.34-1.111-.806-1.886c-.552-.921-1.317-1.914-2.148-2.874A44 44 0 0 0 9 11.283"></svg:path></svg:g>`,
})
export class HealthiconsBaby0203AltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
