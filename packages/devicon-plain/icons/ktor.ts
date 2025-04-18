import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainKtorIcon],svg[devicon-plain-ktor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.543 14.629L14.629 47.543l32.414 32.414V47.043h32.914zm.5 33.414v31.914h31.914V48.043zm32.914 0v32.914H48.043l32.414 32.414l32.914-32.914z"></svg:path>`,
})
export class DeviconPlainKtorIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
