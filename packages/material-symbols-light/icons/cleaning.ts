import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCleaningIcon],svg[material-symbols-light-cleaning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.866 8.116L10.98 6v-.77H9.596V4h4.846q.31 0 .54.23t.23.54v.692l-.885 1.769h-1.923V6.192l-1.846 1.924zM8.789 21v-5.812q0-.16.058-.366q.059-.207.126-.36L12.403 8h1.924q.215.216.339.486q.123.27.123.572V21z"></svg:path>`,
})
export class MaterialSymbolsLightCleaningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
