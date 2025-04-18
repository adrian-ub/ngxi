import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDismissCircle24Icon],svg[fluent-color-dismiss-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDismissCircle240)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path fill="url(#fluentColorDismissCircle241)" d="m15.53 8.47l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47l-.084-.072a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47l-.072.084a.75.75 0 0 0-.007.882l.08.094l.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47l.084.072a.75.75 0 0 0 .882.007l.094-.08l.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47l.072-.084a.75.75 0 0 0 .007-.882z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDismissCircle240" x1="5.125" x2="18.25" y1="3.25" y2="22.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F83F54"></svg:stop><svg:stop offset="1" stop-color="#CA2134"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDismissCircle241" x1="8.685" x2="12.591" y1="12.332" y2="16.392" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#FECBE6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDismissCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
