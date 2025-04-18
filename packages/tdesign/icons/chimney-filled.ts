import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimneyFilledIcon],svg[tdesign-chimney-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.28 2H1.72l1.27 5.088L1.926 22H14v-5h2v5h6v-8.618l-7-3.5l-2.632 1.316l-.358-4.118zM4.074 20L4.93 8h5.152l.361 4.16L8 13.381V20zm6.645-16l-.5 2H4.78l-.5-2z"></svg:path>`,
})
export class TdesignChimneyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
