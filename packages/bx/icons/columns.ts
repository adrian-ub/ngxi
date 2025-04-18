import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxColumnsIcon],svg[bx-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.893 3.001H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h15.893c1.103 0 2-.897 2-2V5a2.003 2.003 0 0 0-2-1.999M8 19.001H4V8h4zm6 0h-4V8h4zm2 0V8h3.893l.001 11.001z"></svg:path>`,
})
export class BxColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
