import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingDown24RegularIcon],svg[fluent-arrow-trending-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.749 18.5h7.554l.1-.014l.099-.028l.06-.025a.7.7 0 0 0 .219-.151l.04-.044l.044-.057l.054-.09l.039-.09l.019-.064l.014-.064l.009-.094v-7.533a.75.75 0 0 0-1.493-.101l-.007.101v5.695l-7.719-7.72a.75.75 0 0 0-.976-.073l-.085.073l-2.97 2.97l-5.47-5.47a.75.75 0 0 0-1.133.977l.073.084l6 6a.75.75 0 0 0 .976.073l.084-.073l2.97-2.97L19.439 17h-5.69a.75.75 0 0 0-.742.648L13 17.75c0 .38.282.694.648.743z"></svg:path>`,
})
export class FluentArrowTrendingDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
