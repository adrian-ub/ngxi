import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFullscreenIcon],svg[zmdi-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 235v64h64v42H0V235zM0 149V43h107v42H43v64zm256 150v-64h43v106H192v-42zM192 43h107v106h-43V85h-64z"></svg:path>`,
})
export class ZmdiFullscreenIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
