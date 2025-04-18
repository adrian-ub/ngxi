import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWindowIcon],svg[tdesign-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h7V4zm9 1.414v6.172l7 7v-6.172zm7 4.172V4h-5.586zM18.586 20L13 14.414V20z"></svg:path>`,
})
export class TdesignWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
