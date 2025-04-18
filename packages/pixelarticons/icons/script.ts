import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsScriptIcon],svg[pixelarticons-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h14v2h2v6h-2v8h-2V5H6zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2zm0 0v2H4v-2z"></svg:path>`,
})
export class PixelarticonsScriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
