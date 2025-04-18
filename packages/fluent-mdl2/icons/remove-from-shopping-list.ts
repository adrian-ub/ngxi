import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoveFromShoppingListIcon],svg[fluent-mdl2-remove-from-shopping-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768v128H512V768zm896 0v128H768V768zM512 1280v-128h128v128zm256 0v-128h768v128zM640 384v128H512V384zm896 0v128H768V384zM384 128v1536h896v128H256V0h1536v1280h-128V128zm1645 1389l-211 211l211 211l-90 90l-211-211l-211 211l-90-90l211-211l-211-211l90-90l211 211l211-211z"></svg:path>`,
})
export class FluentMdl2RemoveFromShoppingListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
