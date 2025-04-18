import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArtboardIcon],svg[tdesign-artboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v4h8V2h2v4h4v2h-4v8h4v2h-4v4h-2v-4H8v4H6v-4H2v-2h4V8H2V6h4V2zm0 6v8h8V8z"></svg:path>`,
})
export class TdesignArtboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
