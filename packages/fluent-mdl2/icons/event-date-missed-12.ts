import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EventDateMissed12Icon],svg[fluent-mdl2-event-date-missed-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 171h341v1877H0V171h341V0h171v171h853V0h171zm171 1706V683H171v1194zm0-1365V341H171v171zm-854 853V853h171v512zm0 342v-171h171v171z"></svg:path>`,
})
export class FluentMdl2EventDateMissed12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
