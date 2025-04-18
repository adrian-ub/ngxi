import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare07Icon],svg[hugeicons-hierarchy-square-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19.5c0-1.178 0-1.768.44-2.134C2.878 17 3.585 17 5 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C7.122 22 6.415 22 5 22s-2.121 0-2.56-.366S2 20.678 2 19.5m14 0c0-1.178 0-1.768.44-2.134C16.878 17 17.585 17 19 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C21.122 22 20.415 22 19 22s-2.121 0-2.56-.366S16 20.678 16 19.5m3-2.5c0-2.482-.744-3-4.308-3H9.308C5.744 14 5 14.518 5 17m4.891-8.933c-.55.379-1.992 1.153-1.114 2.121c.43.474.907.812 1.508.812h3.43c.6 0 1.079-.338 1.508-.812c.879-.968-.564-1.742-1.114-2.121a3.67 3.67 0 0 0-4.218 0M13.75 3.8c0 .994-.784 1.8-1.75 1.8s-1.75-.806-1.75-1.8S11.034 2 12 2s1.75.806 1.75 1.8" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchySquare07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
