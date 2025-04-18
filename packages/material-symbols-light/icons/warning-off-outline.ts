import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWarningOffOutlineIcon],svg[material-symbols-light-warning-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.616q-.261 0-.438-.177T11.385 17t.177-.438t.438-.178t.439.177t.176.439t-.177.439t-.438.177m-.5-2.231v-3.89l1 1v2.89zm7.614.892l-2.72-2.714L12.004 6l-1.179 2l-.72-.72L12 4zM4.45 19h13.129l-8.31-8.31zm15.833 2.704L18.579 20H2.73L8.55 9.971L2.271 3.692l.714-.713L20.996 20.99zm-6.664-10.91"></svg:path>`,
})
export class MaterialSymbolsLightWarningOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
