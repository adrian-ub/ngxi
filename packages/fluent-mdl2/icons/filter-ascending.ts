import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FilterAscendingIcon],svg[fluent-mdl2-filter-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1411 1347l317-317l317 317l-90 90l-163-163v646h-128v-646l-163 163zM0 128h2048v219l-768 768v805H768v-805L0 347zm1920 165v-37H128v37l768 768v731h256v-731z"></svg:path>`,
})
export class FluentMdl2FilterAscendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
