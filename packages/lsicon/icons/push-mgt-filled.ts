import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPushMgtFilledIcon],svg[lsicon-push-mgt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 0-.5.5V12h1V3h9V2zm7.37 8.81l-.74-1.232l1.224-1.224l-.708-.708L8.422 8.87L7.19 8.13l4.02-1.34z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm7.974 2.158a.5.5 0 0 0-.632-.632l-6 2a.5.5 0 0 0-.1.903l2.394 1.435l1.435 2.393a.5.5 0 0 0 .903-.099z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPushMgtFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
