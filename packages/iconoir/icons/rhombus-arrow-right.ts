import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRhombusArrowRightIcon],svg[iconoir-rhombus-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16 11h-6c-1 0-2 1-2 2v1m8-3l-2-2m2 2l-2 2"></svg:path><svg:path d="M1.424 11.576L11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848Z"></svg:path></svg:g>`,
})
export class IconoirRhombusArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
