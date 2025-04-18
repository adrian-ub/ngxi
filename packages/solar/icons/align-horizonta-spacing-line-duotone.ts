import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingLineDuotoneIcon],svg[solar-align-horizonta-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 2v20M21 2v20" opacity=".5"></svg:path><svg:path d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontaSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
