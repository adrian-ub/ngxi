import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandFlipboardIcon],svg[tabler-brand-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.973 3h16.054c.537 0 .973.436.973.973v4.052a.973.973 0 0 1-.973.973h-5.025v4.831c0 .648-.525 1.173-1.173 1.173H9v5.025a.973.973 0 0 1-.974.973H3.973A.973.973 0 0 1 3 20.027V3.973C3 3.436 3.436 3 3.973 3"></svg:path>`,
})
export class TablerBrandFlipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
