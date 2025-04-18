import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psForrstIcon],svg[ps-forrst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 462h162v-95l-49-34l12-17l37 25v-74h50v47l36-19l11 19l-47 25v26l71-35l9 19l-80 40v73h172L192 2z"></svg:path>`,
})
export class PsForrstIcon {
  readonly viewBox = input("0 0 384 488")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
