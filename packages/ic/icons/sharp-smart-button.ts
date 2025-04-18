import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSmartButtonIcon],svg[ic-sharp-smart-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-3v-2h1V9H4v6h6v2H2V7h20zm-7.5 2l1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5l.62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z"></svg:path>`,
})
export class IcSharpSmartButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
