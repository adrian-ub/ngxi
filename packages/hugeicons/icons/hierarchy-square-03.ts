import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare03Icon],svg[hugeicons-hierarchy-square-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 6c0-1.886 0-2.828.586-3.414S10.114 2 12 2s2.828 0 3.414.586S16 4.114 16 6s0 2.828-.586 3.414S13.886 10 12 10s-2.828 0-3.414-.586S8 7.886 8 6M2 19c0-1.414 0-2.121.44-2.56C2.878 16 3.585 16 5 16s2.121 0 2.56.44C8 16.878 8 17.585 8 19s0 2.121-.44 2.56C7.122 22 6.415 22 5 22s-2.121 0-2.56-.44C2 21.122 2 20.415 2 19m14 0c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C16 21.122 16 20.415 16 19m3-3c-.183-2.453-1.203-3-4.653-3H9.653c-3.45 0-4.47.547-4.653 3" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchySquare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
