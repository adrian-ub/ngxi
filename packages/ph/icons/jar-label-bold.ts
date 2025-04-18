import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phJarLabelBoldIcon],svg[ph-jar-label-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M60 120h136v48H60Zm104-72h-24V36h24Zm-48-12v12H92V36ZM80 72h96a20 20 0 0 1 20 20v4H60v-4a20 20 0 0 1 20-20m96 148H80a20 20 0 0 1-20-20v-8h136v8a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhJarLabelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
