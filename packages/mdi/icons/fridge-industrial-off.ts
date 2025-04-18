import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeIndustrialOffIcon],svg[mdi-fridge-industrial-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.8L5.7 2.5c.35-.31.8-.5 1.3-.5h10a2 2 0 0 1 2 2zm3.11 5.66l-1.27 1.27l-2.38-2.38c-.36.4-.88.65-1.46.65v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2V6.89L1.11 3l1.28-1.27zM10 11.89L8.11 10H8v5h2z"></svg:path>`,
})
export class MdiFridgeIndustrialOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
