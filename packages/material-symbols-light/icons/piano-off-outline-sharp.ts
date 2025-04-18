import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPianoOffOutlineSharpIcon],svg[material-symbols-light-piano-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.833 21.26L18.573 20H4V5.427l-1.26-1.26l.714-.713l17.092 17.092zM20 17.188l-1-1V5h-2.404v8.785L13.212 10.4V5h-2.423v2.977L6.812 4H20zM5 19h3.654v-4.808h-1.25V8.831L5 6.427zm4.539 0h4.922v-3.111l-3.684-3.685v1.988H9.539zm5.807 0h2.227l-2.227-2.227z"></svg:path>`,
})
export class MaterialSymbolsLightPianoOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
