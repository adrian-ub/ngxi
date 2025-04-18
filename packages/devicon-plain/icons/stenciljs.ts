import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainStenciljsIcon],svg[devicon-plain-stenciljs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.049 15L31.467 43.83h49.19L107.198 15zM26.652 49.17L0 78h101.348L128 49.17zM47.088 83l-1.703 1.953L21 112h48.592L96 83z"></svg:path>`,
})
export class DeviconPlainStenciljsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
