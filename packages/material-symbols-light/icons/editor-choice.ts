import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditorChoiceIcon],svg[material-symbols-light-editor-choice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 22v-6.956L3.962 9.5L7.972 3h8.057l4.01 6.5l-3.423 5.544V22L12 20.404zM8.519 4l-3.4 5.5l3.4 5.5h6.962l3.4-5.5l-3.4-5.5zm2.431 8.864L8.112 10.05l.713-.714l2.125 2.125l4.225-4.25l.713.689z"></svg:path>`,
})
export class MaterialSymbolsLightEditorChoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
