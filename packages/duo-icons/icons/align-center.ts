import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsAlignCenterIcon],svg[duo-icons-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17.5a1.5 1.5 0 0 1 .144 2.993L17 20.5H7a1.5 1.5 0 0 1-.144-2.993L7 17.5z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 2.5a1.5 1.5 0 0 1 .144 2.993L20 5.5H4a1.5 1.5 0 0 1-.144-2.993L4 2.5z" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" d="M17 7.5a1.5 1.5 0 0 1 .144 2.993L17 10.5H7a1.5 1.5 0 0 1-.144-2.993L7 7.5z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 12.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
