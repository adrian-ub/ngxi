import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDoorIcon],svg[openmoji-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#A57939" d="M18 9h36v54H18z"></svg:path><svg:path fill="#6A462F" d="M24 14.094h24v16.302H24zm0 31.585h24v11.207H24z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M18 9h36v54H18z"></svg:path><svg:ellipse cx="49" cy="36.509" rx="2.5" ry="2.038"></svg:ellipse><svg:path d="M49.5 41.604h-1a1 1 0 0 1-1-1v-6.151a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6.15a1 1 0 0 1-1 1"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M24 14.094h24v16.302H24zm0 31.585h24v11.207H24z"></svg:path>`,
})
export class OpenmojiDoorIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
