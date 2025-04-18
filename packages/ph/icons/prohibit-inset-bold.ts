import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetBoldIcon],svg[ph-prohibit-inset-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 151.51a12 12 0 0 1-17 17l-64-64a12 12 0 0 1 17-17ZM236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhProhibitInsetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
