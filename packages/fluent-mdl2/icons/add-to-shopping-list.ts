import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddToShoppingListIcon],svg[fluent-mdl2-add-to-shopping-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 896H512V768h128zm896 0H768V768h768zM512 1152h128v128H512zm256 0h768v128H768zM640 512H512V384h128zm896 0H768V384h768zm512 1152v128h-256v256h-128v-256h-256v-128h256v-256h128v256zm-1664 0h896v128H256V0h1536v1280h-128V128H384z"></svg:path>`,
})
export class FluentMdl2AddToShoppingListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
