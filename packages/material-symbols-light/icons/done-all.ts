import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoneAllIcon],svg[material-symbols-light-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 17.308L1.742 12.35l.714-.708l4.25 4.25l.692-.692l.708.708zm5.65 0L7.392 12.35l.708-.713l4.25 4.25l9.2-9.2l.708.713zm-.692-4.958l-.714-.708l4.95-4.95l.714.708z"></svg:path>`,
})
export class MaterialSymbolsLightDoneAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
