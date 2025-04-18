import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewQuiltIcon],svg[zmdi-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 320V192h107v128zM0 320V43h107v277zm256 0V192h107v128zM128 43h235v128H128z"></svg:path>`,
})
export class ZmdiViewQuiltIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
