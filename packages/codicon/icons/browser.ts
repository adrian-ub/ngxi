import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconBrowserIcon],svg[codicon-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12zM2 5v8h12V5zm0-1h12V2H2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconBrowserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
