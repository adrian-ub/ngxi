import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare02Icon],svg[hugeicons-hierarchy-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 0H9c-1.886 0-2.828 0-3.414.586S5 14.114 5 16m7-4h3c1.886 0 2.828 0 3.414.586S19 14.114 19 16M2 19c0-1.414 0-2.121.44-2.56C2.878 16 3.585 16 5 16s2.121 0 2.56.44C8 16.878 8 17.585 8 19s0 2.121-.44 2.56C7.122 22 6.415 22 5 22s-2.121 0-2.56-.44C2 21.122 2 20.415 2 19m14 0c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C16 21.122 16 20.415 16 19M10.286 2h3.428C15.79 2 16 3.11 16 5s-.211 3-2.286 3h-3.428C8.21 8 8 6.89 8 5s.211-3 2.286-3" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchySquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
