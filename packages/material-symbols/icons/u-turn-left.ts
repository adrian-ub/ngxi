import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUTurnLeftIcon],svg[material-symbols-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21V9q0-1.65-1.175-2.825T12 5T9.175 6.175T8 9v4.2l1.6-1.6L11 13l-4 4l-4-4l1.4-1.4L6 13.2V9q0-2.5 1.75-4.25T12 3t4.25 1.75T18 9v12z"></svg:path>`,
})
export class MaterialSymbolsUTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
