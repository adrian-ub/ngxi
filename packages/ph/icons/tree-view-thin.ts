import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreeViewThinIcon],svg[ph-tree-view-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H84V76h12a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v116a20 20 0 0 0 20 20h68v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H96a12 12 0 0 1-12-12v-68h80v12a12 12 0 0 0 12 12M60 64V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m112 128a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm0-88a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeViewThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
