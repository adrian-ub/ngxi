import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRewindFilledIcon],svg[ix-rewind-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 253.32v128l-213.333-128L256 125.32zm0 0l213.333 128v-256z" clip-rule="evenodd"></svg:path>`,
})
export class IxRewindFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
