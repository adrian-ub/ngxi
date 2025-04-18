import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCollageIcon],svg[tdesign-collage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h4.198l3.555-16zm9.802 0l-1.641 7.387L20 14.523V4zM20 16.677l-8.279-3.312L10.247 20H20z"></svg:path>`,
})
export class TdesignCollageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
