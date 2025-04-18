import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLeaf2Icon],svg[tabler-leaf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21c.5-4.5 2.5-8 7-10"></svg:path><svg:path d="M7.5 15Q4 15 3 9a8.4 8.4 0 0 1 3.438.402a12 12 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557Q15 5 19 5q.396 3.775-1.557 6.568C19.748 12.407 21 14.41 21 14.41S18 17 14 17c0 1 0 1 .5 3q-6 0-7-5"></svg:path></svg:g>`,
})
export class TablerLeaf2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
