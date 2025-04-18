import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseOctagonIcon],svg[tdesign-close-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.35 1.5l6.15 6.15v8.699l-6.15 6.15h-8.7L1.5 16.35v-8.7L7.65 1.5zm-.83 2H8.48L3.5 8.479v7.041l4.98 4.98h7.04l4.98-4.98V8.48zm1.076 5.318L13.414 12l3.182 3.181l-1.414 1.415L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.817l1.415-1.414L12 10.585l3.182-3.181z"></svg:path>`,
})
export class TdesignCloseOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
