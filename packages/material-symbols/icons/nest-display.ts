import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestDisplayIcon],svg[material-symbols-nest-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-2.475 0-4.237-.337T6 17.85V17H4.175Q3.3 17 2.7 16.35t-.525-1.525l.675-8q.05-.775.625-1.3T4.85 5h14.3q.8 0 1.375.525t.625 1.3l.675 8q.075.875-.525 1.525t-1.475.65H18v.85q0 .475-1.763.813T12 19"></svg:path>`,
})
export class MaterialSymbolsNestDisplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
