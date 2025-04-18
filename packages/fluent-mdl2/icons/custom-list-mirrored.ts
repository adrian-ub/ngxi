import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CustomListMirroredIcon],svg[fluent-mdl2-custom-list-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0H256v2048h1536zM384 1920V128h1280v1792zM512 384v128h768V384zm128 384v128h640V768zm256 384v128h384v-128zm-384 384v128h768v-128zm896-1152v128h128V384zm0 384v128h128V768zm0 384v128h128v-128zm0 384v128h128v-128z"></svg:path>`,
})
export class FluentMdl2CustomListMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
