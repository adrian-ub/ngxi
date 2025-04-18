import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBorderAllIcon],svg[zmdi-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h384v384H0zm171 341V213H43v128zm0-170V43H43v128zm170 170V213H213v128zm0-170V43H213v128z"></svg:path>`,
})
export class ZmdiBorderAllIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
