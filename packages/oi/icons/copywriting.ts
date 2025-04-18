import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCopywritingIcon],svg[oi-copywriting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h8V0zm0 2v1h5V2zm0 3v1h8V5zm0 2v1h6V7zm7.5 0c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5"></svg:path>`,
})
export class OiCopywritingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
