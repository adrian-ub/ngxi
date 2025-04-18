import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLatticePatternIcon],svg[icon-park-outline-lattice-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 8h4m4 8h4M16 6v4m-8 4v4M22 8h4m4 8h4M32 6v4m-8 4v4M38 8h4m-2 6v4M6 24h4m4 8h4m-2-10v4m-8 4v4m14-10h4m4 8h4m-2-10v4m-8 4v4m14-10h4m-2 6v4M6 40h4m6-2v4m6-2h4m6-2v4m6-2h4"></svg:path>`,
})
export class IconParkOutlineLatticePatternIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
