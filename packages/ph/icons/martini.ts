import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMartiniIcon],svg[ph-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM43.31 48h169.38l-16 16H59.31ZM128 132.69L75.31 80h105.38Z"></svg:path>`,
})
export class PhMartiniIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
