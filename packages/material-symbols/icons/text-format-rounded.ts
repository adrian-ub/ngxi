import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextFormatRoundedIcon],svg[material-symbols-text-format-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19q-.425 0-.712-.288T5 18t.288-.712T6 17h12q.425 0 .713.288T19 18t-.288.713T18 19zm1.35-5.2l3.425-9.2q.1-.275.338-.437T11.65 4h.7q.3 0 .538.163t.337.437l3.425 9.225q.15.425-.1.8t-.7.375q-.275 0-.512-.162T15 14.4l-.75-2.2H9.8L9 14.425q-.1.275-.325.425t-.5.15q-.475 0-.737-.387T7.35 13.8m3-3.2h3.3l-1.6-4.55h-.1z"></svg:path>`,
})
export class MaterialSymbolsTextFormatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
