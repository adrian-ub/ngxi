import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CustomListIcon],svg[fluent-mdl2-custom-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0h1536v2048H256zm1408 1920V128H384v1792zM1536 384v128H768V384zm-128 384v128H768V768zm-256 384v128H768v-128zm384 384v128H768v-128zM640 384v128H512V384zm0 384v128H512V768zm0 384v128H512v-128zm0 384v128H512v-128z"></svg:path>`,
})
export class FluentMdl2CustomListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
