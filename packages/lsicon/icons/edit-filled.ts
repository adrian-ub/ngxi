import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEditFilledIcon],svg[lsicon-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.639 1.646a.5.5 0 0 1 .707 0l2.121 2.122a.5.5 0 0 1 0 .707l-6.32 6.32l-3.432.743l.567-3.403a.5.5 0 0 1 .14-.272zM14 14H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEditFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
