import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCheckDoubleIcon],svg[la-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.281 7.281L11.5 19.063L8.719 16.28L7.28 17.72l2.782 2.781L8 22.563L1.719 16.28L.28 17.72l7 7l.719.687l.719-.687l2.781-2.782l2.781 2.782l.719.687l.719-.687l15.906-16l-1.438-1.438L15 22.563L12.937 20.5L24.72 8.719z"></svg:path>`,
})
export class LaCheckDoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
