import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureBoldIcon],svg[ph-tree-structure-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 116h48a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-12a28 28 0 0 0-28 28v28H76v-4a20 20 0 0 0-20-20H24a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-4h24v28a28 28 0 0 0 28 28h12v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12h-12a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h12v12a20 20 0 0 0 20 20M52 140H28v-24h24Zm112 24h40v40h-40Zm0-112h40v40h-40Z"></svg:path>`,
})
export class PhTreeStructureBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
