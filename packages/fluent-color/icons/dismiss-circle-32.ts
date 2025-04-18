import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle32Icon],svg[fluent-color-dismiss-circle-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle320)" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2"></svg:path><svg:path fill="url(#fluentColorDismissCircle321)" d="M21.707 10.293a1 1 0 0 1 0 1.414L17.414 16l4.293 4.293a1 1 0 0 1-1.414 1.414L16 17.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L14.586 16l-4.293-4.293a1 1 0 1 1 1.414-1.414L16 14.586l4.293-4.293a1 1 0 0 1 1.414 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle320" x1="6.375" x2="24.75" y1="3.75" y2="30.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle321" x1="10.697" x2="16.945" y1="16.53" y2="23.028" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
