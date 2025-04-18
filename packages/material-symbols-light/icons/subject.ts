import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubjectIcon],svg[material-symbols-light-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18.23V17h8v1zm0-3.788v-1h14v1zm0-3.884v-1h14v1zM5 7V5.77h14V7z"></svg:path>`,
})
export class MaterialSymbolsLightSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
