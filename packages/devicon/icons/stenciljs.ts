import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconStenciljsIcon],svg[devicon-stenciljs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4F4F4" d="M47.144 83H96l-26.409 29H21z"></svg:path><svg:path fill="#A7A7A7" d="M47.087 83H96L34 98z"></svg:path><svg:path fill="#fff" d="M128 49.17H26.653L0 78h101.347zM58.05 15h49.15L80.656 43.83h-49.19z"></svg:path>`,
})
export class DeviconStenciljsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
