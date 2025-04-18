import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMultiFolderIcon],svg[marketeq-multi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M14.583 35.417h-6.25a2.083 2.083 0 0 1-2.083-2.084v-25A2.083 2.083 0 0 1 8.333 6.25h8.334a2.08 2.08 0 0 1 1.479.604l5.02 5.042a2.08 2.08 0 0 0 1.48.604h10.77a2.083 2.083 0 0 1 2.084 2.083v6.25"></svg:path><svg:path stroke="#344054" d="M41.667 20.833h-25c-1.15 0-2.084.933-2.084 2.084v18.75c0 1.15.933 2.083 2.084 2.083h25c1.15 0 2.083-.933 2.083-2.083v-18.75c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqMultiFolderIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
