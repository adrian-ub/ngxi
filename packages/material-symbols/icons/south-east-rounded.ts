import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthEastRoundedIcon],svg[material-symbols-south-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 17L4.7 6.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L17 15.6V10q0-.425.288-.712T18 9t.713.288T19 10v8q0 .425-.288.713T18 19h-8q-.425 0-.712-.288T9 18t.288-.712T10 17z"></svg:path>`,
})
export class MaterialSymbolsSouthEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
