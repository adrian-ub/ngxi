import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopCursor24FilledIcon],svg[fluent-desktop-cursor-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 22a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245L4.25 3h15.499a2.25 2.25 0 0 1 2.245 2.096l.005.154v10.502c0 .372-.09.723-.25 1.032l-4.695-5.205a1.75 1.75 0 0 0-3.05 1.17l-.002 5.253H9.998l.001 2.498h4.002V22zm8.736-9.95a.75.75 0 0 1 .826.198l6.365 7.058a.75.75 0 0 1-.738 1.23l-3.537-.878l-2.03 3.014a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7"></svg:path>`,
})
export class FluentDesktopCursor24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
