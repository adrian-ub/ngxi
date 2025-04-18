import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForEuropeanUnionIcon],svg[emojione-flag-for-european-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#2a5f9e"></svg:circle><svg:path fill="#ffce31" d="m32 11.8l.7 2.2H35l-1.8 1.4l.7 2.2l-1.9-1.4l-1.9 1.4l.7-2.2L29 14h2.3zm0 34l.7 2.2H35l-1.8 1.3l.7 2.3l-1.9-1.4l-1.9 1.4l.7-2.3L29 48h2.3zm8.4-2.8l.7 2.2h2.4l-1.9 1.4l.7 2.2l-1.9-1.4l-1.9 1.4l.8-2.2l-1.9-1.4h2.3zm5.8-5.8l.7 2.2h2.4l-1.9 1.4l.7 2.2l-1.9-1.4l-1.9 1.4l.8-2.2l-1.9-1.4h2.3zm2.8-8.4l.7 2.2H52l-1.9 1.4l.7 2.2l-1.8-1.4l-1.9 1.4l.7-2.2l-1.9-1.4h2.3zm-2.8-8.5l.7 2.3h2.4l-1.9 1.3l.7 2.2l-1.9-1.3l-1.9 1.3l.8-2.2l-1.9-1.3h2.3zm-5.8-5.8l.7 2.3h2.4l-1.9 1.3l.7 2.2l-1.9-1.3l-1.9 1.3l.8-2.2l-1.9-1.3h2.3zM23.6 43l-.7 2.2h-2.4l1.9 1.4l-.7 2.2l1.9-1.4l1.9 1.4l-.8-2.2l1.9-1.4h-2.3zm-5.8-5.8l-.7 2.2h-2.4l1.9 1.4l-.7 2.2l1.9-1.4l1.9 1.4l-.8-2.2l1.9-1.4h-2.3zM15 28.8l-.7 2.2H12l1.9 1.4l-.7 2.2l1.8-1.4l1.9 1.4l-.7-2.2l1.9-1.4h-2.3zm2.8-8.5l-.7 2.3h-2.4l1.9 1.3l-.7 2.2l1.9-1.3l1.9 1.3l-.8-2.2l1.9-1.3h-2.3zm5.8-5.8l-.7 2.3h-2.4l1.9 1.3l-.7 2.2l1.9-1.3l1.9 1.3l-.8-2.2l1.9-1.3h-2.3z"></svg:path>`,
})
export class EmojioneFlagForEuropeanUnionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
