import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackHandOutlineSharpIcon],svg[material-symbols-light-back-hand-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.57 22q-1.936 0-3.62-.928t-2.72-2.584l-3.8-6.107l.907-.906L8 14.555V4.5h1v11.964l-4.815-3.23l2.894 4.682q.875 1.448 2.341 2.266t3.15.818q2.67 0 4.55-1.86T19 14.587V5h1v9.589q0 3.095-2.164 5.253Q15.674 22 12.57 22m-.896-10.5v-9h1v9zm3.673 0v-8h1v8zm-3.754 4.75"></svg:path>`,
})
export class MaterialSymbolsLightBackHandOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
