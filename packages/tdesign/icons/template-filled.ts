import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTemplateFilledIcon],svg[tdesign-template-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v6h20zm0 8H11v12h11zM9 22V10H2v12z"></svg:path>`,
})
export class TdesignTemplateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
