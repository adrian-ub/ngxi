import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenWithIcon],svg[material-symbols-open-with-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-4.25-4.25l1.425-1.425L11 18.15V14h2v4.125l1.8-1.825l1.45 1.45zm-5.75-5.75L2 12l4.225-4.225L7.65 9.2L5.85 11H10v2H5.875L7.7 14.8zm11.5 0l-1.425-1.425L18.15 13H14v-2h4.125L16.3 9.2l1.45-1.45L22 12zM11 10V5.85L9.175 7.675L7.75 6.25L12 2l4.25 4.25l-1.425 1.425L13 5.85V10z"></svg:path>`,
})
export class MaterialSymbolsOpenWithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
