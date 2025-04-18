import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJapaneseCastleIcon],svg[openmoji-japanese-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M17 50h38v10H17zm5-17h28v10H22zm5-17h18v10H27z"></svg:path><svg:path fill="#3F3F3F" d="M54 33H18l4-3l2-4h24l2 4zm5.5 17h-47l4-3l2-4h35l2 4zM49 16H23l4-3l2-4h14l2 4z"></svg:path><svg:path fill="#A57939" d="M41.5 60h-11v-7h11z"></svg:path><svg:path fill="none" stroke="#92D3F5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23 53h2v4h-2zm8-34h2v4h-2zm8 0h2v4h-2zm8 34h2v4h-2z"></svg:path><svg:path fill="#D0CFCE" d="M36 31L23 45h26z"></svg:path><svg:path fill="none" stroke="#92D3F5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M32 40h2v2h-2zm6 0h2v2h-2z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M17 50h38v10H17zm17.14-17l-9.28 10H22V33zM50 33v10h-2.86l-9.28-10zM27 16h18v10H27zm27 17H37.86L36 31l-1.86 2H18l4-3l2-4h24l2 4zm5.5 17h-47l4-3l2-4h6.36L23 45h26l-1.86-2h6.36l2 4zM49 16H23l4-3l2-4h14l2 4z"></svg:path><svg:path d="M41.5 60h-11v-7h11z"></svg:path><svg:path d="M34.063 60v-7h4v7M49 45H23l1.86-2l9.28-10L36 31l1.86 2l9.28 10zM25 57h-2v-4m10-30h-2v-4m10 4h-2v-4m10 38h-2v-4"></svg:path><svg:path d="M34 42h-2v-2m8 2h-2v-2"></svg:path></svg:g>`,
})
export class OpenmojiJapaneseCastleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
