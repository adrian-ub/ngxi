import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardOptionKeyRoundedIcon],svg[material-symbols-light-keyboard-option-key-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.002 18.5q-.435 0-.804-.212t-.594-.596L8.312 6.808q-.096-.154-.231-.231T7.792 6.5H4.5q-.213 0-.356-.144T4 5.999t.144-.356T4.5 5.5h3.273q.435 0 .804.212t.594.596l6.293 10.884q.095.154.23.231t.289.077H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM16 6.5q-.213 0-.356-.144t-.144-.357t.144-.356T16 5.5h3.5q.213 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardOptionKeyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
