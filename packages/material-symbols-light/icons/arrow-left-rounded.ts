import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowLeftRoundedIcon],svg[material-symbols-light-arrow-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.804 15.112l-2.677-2.677q-.093-.093-.143-.2T9.935 12t.05-.235t.143-.2l2.677-2.677q.056-.055.129-.093q.073-.037.157-.037q.168 0 .289.11q.121.112.121.293v5.677q0 .182-.124.293t-.288.111q-.042 0-.284-.13"></svg:path>`,
})
export class MaterialSymbolsLightArrowLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
