import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChartIncreasingWithYenIcon],svg[openmoji-chart-increasing-with-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b1cc33" d="m34.091 29.625l-8.675 20.614l-6.996-2.984l-7.462 11.753l3.078 2.052l5.597-9.048l4.384 1.679l3.358 1.399l8.686-20.56l10.716 6.009l13.525-27.15l-2.798-1.865l-12.593 24.351z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.316 32.405v-8.25l5.5-11l-5.5 11l-5.5-11m.279 10.589H23.46m10.631 5.881l-8.675 20.614l-6.996-2.984l-7.462 11.753l3.078 2.052l5.597-9.048l4.384 1.679l3.358 1.399l8.686-20.56l10.716 6.009l13.525-27.15l-2.798-1.865l-12.593 24.351z"></svg:path>`,
})
export class OpenmojiChartIncreasingWithYenIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
