import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGhostThinIcon],svg[ph-ghost-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 116a8 8 0 1 1-8-8a8 8 0 0 1 8 8m48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64 12v96a4 4 0 0 1-6.53 3.1l-26.8-21.93l-26.8 21.93a4 4 0 0 1-5.07 0L128 197.17l-26.8 21.93a4 4 0 0 1-5.07 0l-26.8-21.93l-26.8 21.93A4 4 0 0 1 36 216v-96a92 92 0 0 1 184 0m-8 0a84 84 0 0 0-168 0v87.56l22.8-18.66a4 4 0 0 1 5.07 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.06 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.07 0l22.8 18.66Z"></svg:path>`,
})
export class PhGhostThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
