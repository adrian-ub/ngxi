import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSchoolIcon],svg[material-symbols-light-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.923 15.385V9.562L12 13.846L3.077 9L12 4.154L20.923 9v6.385zM12 18.692l-6-3.261v-4.077l6 3.262l6-3.262v4.077z"></svg:path>`,
})
export class MaterialSymbolsLightSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
