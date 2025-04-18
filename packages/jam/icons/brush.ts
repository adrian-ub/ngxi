import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBrushIcon],svg[jam-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.816 11.556c-1.008.464-1.69 1.003-2.084 1.598a52 52 0 0 0-1.115 1.756c1.124.244 1.969.127 2.578-.281c.852-.57 1.408-1.221 1.717-1.977zm1.395-1.433l1.02 1.02c.742-.382 1.489-.987 2.234-1.832c1.139-1.29 3.061-3.588 5.757-6.88a.211.211 0 0 0-.297-.296c-3.286 2.693-5.583 4.615-6.881 5.758c-.849.746-1.454 1.491-1.833 2.23m-.903 6.168q-2.423 1.622-6.63-.298a58 58 0 0 1 2.387-3.945q.983-1.48 3.17-2.422q.728-1.688 2.487-3.236q1.98-1.743 6.936-5.803a2.21 2.21 0 0 1 3.111 3.111q-4.065 4.965-5.804 6.935q-1.467 1.662-3.067 2.408q-.645 1.946-2.59 3.249z"></svg:path>`,
})
export class JamBrushIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
