import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGreaterThanIcon],svg[tdesign-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.636 4.372L16.985 12l-13.35 7.628l.993 1.736L21.016 12L4.628 2.636z"></svg:path>`,
})
export class TdesignGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
