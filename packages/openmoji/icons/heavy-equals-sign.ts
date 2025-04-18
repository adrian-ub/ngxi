import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHeavyEqualsSignIcon],svg[openmoji-heavy-equals-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17.068 33.391l37.878-.06v5.08l-37.878.149z"></svg:path><svg:path fill="#d0cfce" d="M54.939 32.334H17.061v-9.905h37.871m.007 26.977H17.061v-9.905h37.871"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.061 22.352h37.878v10.296H17.061zm0 17h37.878v10.296H17.061z"></svg:path>`,
})
export class OpenmojiHeavyEqualsSignIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
