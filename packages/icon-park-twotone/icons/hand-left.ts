import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHandLeftIcon],svg[icon-park-twotone-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHandLeft0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M44 41V19h-6v22z"></svg:path><svg:path d="M38 19Q27.343 9.145 25.643 7.7c-1.7-1.446-3.62-.839-3.62 2.779s5.263 5.765 5.263 8.521q.006.026-20.282.003A3 3 0 0 0 4 22.002v.003a3.004 3.004 0 0 0 3.004 3.005h7.013q1.81 11.952 1.997 12.999C16.202 39.054 17.2 41 20.068 41H38z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHandLeft0)"></svg:path>`,
})
export class IconParkTwotoneHandLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
