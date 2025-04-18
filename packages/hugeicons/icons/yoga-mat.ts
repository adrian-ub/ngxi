import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYogaMatIcon],svg[hugeicons-yoga-mat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.506 15.009l6.634-4.511q.283-.211.497-.488c.485-.63.476-1.506.168-2.238A4.55 4.55 0 0 0 13.6 5c-.936 0-1.806.279-2.529.757l-7.08 5"></svg:path><svg:path d="M5.995 13.506c0 .696.369 2.08 2.04 2.46c1.007.228 3.938-.736 2.504-3.528s-4.887-2.806-6.292-1.87c-.859.52-2.526 2.148-2.21 4.311c.113 1.31 1.145 3.97 4.375 4.122h9.892c.922-.073 1.112-.207 1.814-.745c.945-.848 2.522-2.408 3.439-3.435c.198-.221.411-.45.439-.746v0c.145-1.576-2.247-.893-3.98-1.081"></svg:path></svg:g>`,
})
export class HugeiconsYogaMatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
