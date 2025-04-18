import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorIndentIncreaseSolidIcon],svg[bubbles-editor-indent-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#bubblesEditorIndentIncreaseSolid0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3.466 2.082a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2H4.466a1 1 0 0 1-1-1m0 16.666a1 1 0 0 1 1-1H19a1 1 0 0 1 0 2H4.466a1 1 0 0 1-1-1M8.1 14.415a1 1 0 0 0 0 2H19a1 1 0 1 0 0-2zm-1-2.333a1 1 0 0 1 1-1H19a1 1 0 0 1 0 2H8.1a1 1 0 0 1-1-1m1-4.334a1 1 0 1 0 0 2H19a1 1 0 1 0 0-2zm-1-2.333a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2H8.1a1 1 0 0 1-1-1m-5.274.887a1.07 1.07 0 0 0-.569-.288l-.131-.013a1.06 1.06 0 0 0-.509.107c-.191.094-.35.242-.458.425a1.14 1.14 0 0 0-.159.58v6.774c0 .204.054.405.158.58a1.1 1.1 0 0 0 .459.425a1.06 1.06 0 0 0 1.21-.195l3.499-3.386a1.1 1.1 0 0 0 .34-.811a1.14 1.14 0 0 0-.34-.81z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesEditorIndentIncreaseSolid0"><svg:path fill="#fff" d="M0 0h20v20H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesEditorIndentIncreaseSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
