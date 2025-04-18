import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTurnSharpLeftIcon],svg[ic-sharp-turn-sharp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.83L4.41 8.41L3 7l4-4l4 4l-1.41 1.41L8 6.83V13h10v8h-2v-6H6z"></svg:path>`,
})
export class IcSharpTurnSharpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
