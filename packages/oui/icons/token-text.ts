import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenTextIcon],svg[oui-token-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.147 4.297l-.255 1.455h.936l-.222 1.266h-.935l-.455 2.688q-.037.276.036.417q.072.14.365.151q.113.006.465-.027l-.13 1.32q-.45.145-.957.135q-.828-.011-1.239-.487t-.335-1.293l.476-2.904h-.725l.216-1.266h.725l.254-1.455z"></svg:path>`,
})
export class OuiTokenTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
