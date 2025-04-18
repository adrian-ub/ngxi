import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindFilledIcon],svg[lsicon-remind-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.025V1h1v1.025A5 5 0 0 1 13 7v5h1v1h-3.902a2.1 2.1 0 0 1-4.196 0H2v-1h1V7a5 5 0 0 1 4.5-4.975M6.904 13a1.1 1.1 0 0 0 2.192 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRemindFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
