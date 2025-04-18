import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconAccessibilityInset16Icon],svg[octicon-accessibility-inset-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M3.75 6a.75.75 0 0 0 0 1.5h2.409a2 2 0 0 0-.025.151l-.307 2.508l-.323 3.011a.75.75 0 0 0 1.492.16l.25-2.33h1.509l.25 2.33a.748.748 0 0 0 1.199.552a.75.75 0 0 0 .291-.712l-.32-3l-.309-2.519a2 2 0 0 0-.025-.151h2.409a.75.75 0 0 0 0-1.5zM8 6a2 2 0 1 0 .001-3.999A2 2 0 0 0 8 6"></svg:path>`,
})
export class OcticonAccessibilityInset16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
