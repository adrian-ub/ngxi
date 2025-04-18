import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemoteControl2LineIcon],svg[ri-remote-control-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H7v16h10zm-2 11v2h-2v-2zm-4 0v2H9v-2zm2-9v2h2v2h-2.001L13 12h-2l-.001-2H9V8h2V6z"></svg:path>`,
})
export class RiRemoteControl2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
