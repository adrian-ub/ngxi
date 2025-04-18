import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMinecraftIcon],svg[whh-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024L0 768V256L512 0l512 256v512zm448-736L512 64L64 288v96h64v64h64v-64h64v64h64v64h64v-64l64 32v96h64v-64h64v64h64v-64h64v-96l64-32v64h64v-96l64-32v64h64zm-704 96"></svg:path>`,
})
export class WhhMinecraftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
