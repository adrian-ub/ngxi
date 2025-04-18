import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMaskSolidIcon],svg[mynaui-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.35 6.75a.6.6 0 0 0-.6.6v2.188a1.25 1.25 0 0 0 1.2 1.25V7.35a.6.6 0 0 0-.6-.6m.624 5.538a2.75 2.75 0 0 1-2.724-2.75V7.35a2.1 2.1 0 1 1 4.2 0v.418l4.214-1.235a4.75 4.75 0 0 1 2.672 0l4.214 1.235V7.35a2.1 2.1 0 1 1 4.2 0v2.188a2.75 2.75 0 0 1-2.724 2.75a7.05 7.05 0 0 1-14.052 0m14.076-1.5a1.25 1.25 0 0 0 1.2-1.25V7.35a.6.6 0 1 0-1.2 0z"></svg:path>`,
})
export class MynauiMaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
