import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBorderColorIcon],svg[ic-sharp-border-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68l-3.75-3.75l2.53-2.54l3.75 3.75z"></svg:path>`,
})
export class IcSharpBorderColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
