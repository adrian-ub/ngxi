import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkUnreadChatAltOutlineSharpIcon],svg[material-symbols-light-mark-unread-chat-alt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 13.5h7v-1h-7zm0-3h11v-1h-11zm0-3h9.942v-.023q-.367-.18-.639-.418t-.495-.559H6.5zM3 20.077V3h11.6q-.061.25-.071.49t-.006.51H4v13.644L5.65 16H20V8.342q.287-.067.527-.155q.24-.087.473-.225V17H6.077zM4 4.616v12.769V4zm15.002 1.846q-1.04 0-1.771-.729t-.731-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732"></svg:path>`,
})
export class MaterialSymbolsLightMarkUnreadChatAltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
