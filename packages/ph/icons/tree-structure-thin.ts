import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureThinIcon],svg[ph-tree-structure-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 108h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a20 20 0 0 0-20 20v36H68v-12a12 12 0 0 0-12-12H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h40v36a20 20 0 0 0 20 20h20v20a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20v20a12 12 0 0 0 12 12M60 144a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm96 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Zm0-112a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeStructureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
