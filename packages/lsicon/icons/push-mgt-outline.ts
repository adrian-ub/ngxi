import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPushMgtOutlineIcon],svg[lsicon-push-mgt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 12V2.5H12m-3.5 7L10 12l2-6l-6 2zm0 0L10 8m-5.5 5.5h9v-9h-9z"></svg:path>`,
})
export class LsiconPushMgtOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
