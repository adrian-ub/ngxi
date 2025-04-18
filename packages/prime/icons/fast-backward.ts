import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFastBackwardIcon],svg[prime-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.29 4.31a.76.76 0 0 0-.82.16l-6.72 6.72V5c0-.3-.18-.58-.46-.69a.76.76 0 0 0-.82.16l-6.72 6.72V5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v14c0 .41.34.75.75.75s.75-.34.75-.75v-6.19l6.72 6.72a.75.75 0 0 0 1.28-.53v-6.19l6.72 6.72a.75.75 0 0 0 1.28-.53V5c0-.3-.18-.58-.46-.69m-9.04 12.88L6.06 12l5.19-5.19zm8 0L14.06 12l5.19-5.19z"></svg:path>`,
})
export class PrimeFastBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
