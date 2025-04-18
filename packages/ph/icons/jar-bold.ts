import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJarBoldIcon],svg[ph-jar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M164 48h-24V36h24Zm-48-12v12H92V36Zm80 164a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhJarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
