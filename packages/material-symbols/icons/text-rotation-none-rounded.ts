import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationNoneRoundedIcon],svg[material-symbols-text-rotation-none-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.2 19H5q-.425 0-.712-.288T4 18t.288-.712T5 17h12.2l-.35-.35q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.05 2.05q.3.3.3.7t-.3.7l-2.05 2.05q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7zm-7.4-7.8L9 13.425q-.1.275-.325.425t-.5.15q-.475 0-.737-.387T7.35 12.8l3.425-9.2q.1-.275.338-.438T11.65 3h.7q.3 0 .538.163t.337.437l3.425 9.225q.15.425-.1.8t-.7.375q-.275 0-.512-.162T15 13.4l-.75-2.2zm.55-1.6h3.3l-1.6-4.55h-.1z"></svg:path>`,
})
export class MaterialSymbolsTextRotationNoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
