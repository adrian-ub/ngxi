import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFeathubIcon],svg[cib-feathub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.641.016h8.719v9.156h-8.719zm0 22.812h8.719v9.156h-8.719zM.016 11.641h31.969v8.719H.016z"></svg:path>`,
})
export class CibFeathubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
