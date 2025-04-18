import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCollapseIcon],svg[pixelarticons-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h-2v2h-2v2h-2V5H9V3H7v2h2v2h2v2h2V7h2V5h2zM4 13h16v-2H4zm9 4h-2v-2h2zm2 2h-2v-2h2zm0 0h2v2h-2zm-6 0h2v-2H9zm0 0H7v2h2z"></svg:path>`,
})
export class PixelarticonsCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
