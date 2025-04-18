import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppIndexPatternIcon],svg[oui-app-index-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 14h-8a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3M12 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm5 16v-2h-2v2H3v6h2v-4h10v4h2v-4h10v4h2v-6z"></svg:path><svg:path d="M4 32a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 4a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M13 4h6v2h-6zm0 4h6v2h-6z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppIndexPatternIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
