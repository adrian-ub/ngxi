import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FilterDescendingIcon],svg[fluent-mdl2-filter-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1795 1667l163-163l90 90l-315 317l-325-325l90-90l169 170v-642h127zm-643 125v-731l768-768v-37H128v37l768 768v731zm896-1445l-768 768v805H768v-805L0 347V128h2048z"></svg:path>`,
})
export class FluentMdl2FilterDescendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
