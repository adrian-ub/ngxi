import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockTimeIcon],svg[tdesign-lock-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.5a6.5 6.5 0 0 1 13 0V9h2v2.5h-2V11h-13v9h6v2h-8V9h2zm2 1.5h9V7.5a4.5 4.5 0 1 0-9 0zm11 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m-4-4h2.5v2H9zm10.5 1.752v1.834l1.414 1.414l-1.414 1.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignLockTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
