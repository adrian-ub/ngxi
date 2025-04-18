import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewLabelSharpIcon],svg[material-symbols-light-new-label-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 19q.285-.598.427-1.222q.142-.623.142-1.278q0-2.452-1.716-4.168t-4.169-1.717q-.913 0-1.775.275T3 11.699V5h12.635L21 12l-5.365 7zm-5.815 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z"></svg:path>`,
})
export class MaterialSymbolsLightNewLabelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
