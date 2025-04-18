import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationDownRoundedIcon],svg[material-symbols-text-rotation-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17.2l.35-.35q.275-.275.7-.275t.7.275t.275.7t-.275.7L6.7 20.3q-.3.3-.7.287t-.7-.287l-2.075-2.025q-.3-.3-.287-.712t.312-.713q.3-.275.7-.288t.7.288l.35.35V5q0-.425.288-.712T6 4t.713.288T7 5zm5.8-2.95V9.8L10.575 9q-.275-.1-.425-.325t-.15-.5q0-.475.388-.737t.812-.088l9.2 3.425q.275.1.438.338t.162.537v.7q0 .3-.162.538t-.438.337l-9.225 3.425q-.425.15-.8-.1t-.375-.7q0-.275.163-.512T10.6 15zm1.6-.6l4.55-1.6v-.1l-4.55-1.6z"></svg:path>`,
})
export class MaterialSymbolsTextRotationDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
