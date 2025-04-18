import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBillCashlessSolidIcon],svg[streamline-bill-cashless-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219 1.28A.75.75 0 0 1 1.279.219l2.007 2.006H12.5c.804 0 1.5.626 1.5 1.45v6.65c0 .718-.528 1.285-1.195 1.42l.976.975a.75.75 0 1 1-1.06 1.061L.218 1.28Zm8.996 6.875a2.5 2.5 0 0 0-3.373-3.373zM.174 2.995a1.4 1.4 0 0 0-.174.68v6.65c0 .824.696 1.45 1.5 1.45h7.453z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBillCashlessSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
