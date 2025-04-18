import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSpellcheckIcon],svg[mdi-light-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 17.5l.71-.71l3.5 3.5l7.79-7.79l.71.71l-8.5 8.5zM4.71 13L3.5 16h-1L7.35 4h1.4l4.85 12h-1l-1.21-3zm.41-1H11L8.05 4.74z"></svg:path>`,
})
export class MdiLightSpellcheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
