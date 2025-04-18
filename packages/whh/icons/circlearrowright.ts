import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowrightIcon],svg[whh-circlearrowright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m319-518v-4q0-3-1-5q0-1-.5-2.5t-1-2t-1-2.5t-.5-3q-5-14-13-22L623 274q-19-19-46-19t-46 19t-19 46t19 46l82 82H256q-26 0-45 19t-19 45t19 45t45 19h357l-82 82q-19 19-19 46t19 46t46 19t46-19l191-191q21-21 17-53"></svg:path>`,
})
export class WhhCirclearrowrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
