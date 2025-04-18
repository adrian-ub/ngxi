import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimneyIcon],svg[tdesign-chimney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.719 2H13.28l-1.27 5.08l.358 4.118L15 9.882l7 3.5V22H1.927L2.99 7.088zM4.93 8l-.857 12H8v-6.618l2.444-1.223L10.083 8zm5.288-2l.5-2H4.28l.5 2zm-.22 14h4v-3h2v3h4v-5.382l-5-2.5l-5 2.5z"></svg:path>`,
})
export class TdesignChimneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
