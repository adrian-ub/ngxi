import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWarningOffIcon],svg[material-symbols-light-warning-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.616q.262 0 .439-.177t.176-.439t-.177-.438t-.438-.178t-.438.177t-.177.439t.177.439t.438.177m7.125-1.316l-9.02-9.02L12 4zm1.158 5.404L18.579 20H2.73L8.55 9.971L2.271 3.692l.714-.713L20.996 20.99zm-8.783-6.32h.81v-1.653l-.81-.81z"></svg:path>`,
})
export class MaterialSymbolsLightWarningOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
