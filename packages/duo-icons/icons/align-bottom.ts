import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsAlignBottomIcon],svg[duo-icons-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
