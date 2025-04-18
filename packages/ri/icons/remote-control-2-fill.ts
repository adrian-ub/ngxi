import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRemoteControl2FillIcon],svg[ri-remote-control-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 13h-2v2h2zm-4 0H9v2h2zm2-9h-2v2H9v2h1.999L11 12h2l-.001-2H15V8h-2z"></svg:path>`,
})
export class RiRemoteControl2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
