import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatListNumberedIcon],svg[zmdi-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299v-22h64v86H0v-22h43v-10H21v-22h22v-10zm21-192V43H0V21h43v86zM0 171v-22h64v20l-38 44h38v22H0v-20l38-44zM107 43h298v42H107zm0 298v-42h298v42zm0-128v-42h298v42z"></svg:path>`,
})
export class ZmdiFormatListNumberedIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
