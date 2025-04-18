import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBorderOutsideIcon],svg[mdi-light-border-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v17H3zm1 1v7h1v1H4v7h7v-1h1v1h7v-7h-1v-1h1V5h-7v1h-1V5zm3 7h2v1H7zm4 0h1v1h-1zm0 3h1v2h-1zm3-3h2v1h-2zm-3-2V8h1v2z"></svg:path>`,
})
export class MdiLightBorderOutsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
