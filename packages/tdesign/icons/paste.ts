import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPasteIcon],svg[tdesign-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5v2H4v3H2zm9 0h5v5h-2V4h-3zM9 9h13v13H9zm2 2v9h9v-9zm-7-1v3h3v2H2v-5z"></svg:path>`,
})
export class TdesignPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
