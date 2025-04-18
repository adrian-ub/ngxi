import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMergeIcon],svg[pajamas-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.044 2.31a2.5 2.5 0 1 0-1.706.076v4.228a2.501 2.501 0 1 0 1.5 0V8.373a5.74 5.74 0 0 0 3.86 1.864a2.501 2.501 0 1 0 .01-1.504a4.25 4.25 0 0 1-3.664-2.922ZM11.5 10.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMergeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
