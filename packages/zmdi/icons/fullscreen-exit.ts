import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFullscreenExitIcon],svg[zmdi-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 277v-42h107v106H64v-64zm64-170V43h43v106H0v-42zm128 234V235h107v42h-64v64zm43-234h64v42H192V43h43z"></svg:path>`,
})
export class ZmdiFullscreenExitIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
