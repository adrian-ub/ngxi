import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGifIcon],svg[material-symbols-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15V9H13v6zM6 15q-.45 0-.725-.312T5 14v-4q0-.375.275-.687T6 9h3q.45 0 .725.313T10 10v.5H6.5v3h2V12H10v2q0 .375-.275.688T9 15zm8.5 0V9H19v1.5h-3v1h2V13h-2v2z"></svg:path>`,
})
export class MaterialSymbolsGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
