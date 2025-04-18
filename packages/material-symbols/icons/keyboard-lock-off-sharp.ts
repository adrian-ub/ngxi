import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardLockOffSharpIcon],svg[material-symbols-keyboard-lock-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22v-5h1l4 4v1zm6-2.85l-2-2V16q0-.425-.288-.713T19 15q-.225 0-.437.1t-.338.275l-.7-.725q.275-.3.663-.475T19 14q.825 0 1.413.588T21 16v1h1zM2 19V5h3l9 9H8v2h6.1q-.05.25-.075.488T14 17v2zm18.475 4.3L.7 3.5l1.4-1.4l19.8 19.8zM5 11v2h2v-2zm3 0v2h2v-2zM5 8v2h2V8zm9 2h2V8h-2zm3 0h2V8h-2zM7.85 5H22v8q-.65-.5-1.425-.75T19 12v-1h-2v1.425q-.275.125-.525.263T16 13v-2h-2v.15L12.85 10H13V8h-2v.15z"></svg:path>`,
})
export class MaterialSymbolsKeyboardLockOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
