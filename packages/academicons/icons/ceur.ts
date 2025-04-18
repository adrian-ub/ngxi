import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsCeurIcon],svg[academicons-ceur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 384V128h64V64H64v384h192v-64ZM384 64H256v64h128v256h-64v64h128V64Z"></svg:path>`,
})
export class AcademiconsCeurIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
