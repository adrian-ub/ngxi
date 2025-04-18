import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseOctagonFilledIcon],svg[tdesign-close-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 7.65L16.35 1.5h-8.7L1.5 7.65v8.699l6.15 6.15h8.7l6.15-6.15zm-5.904 1.168L13.414 12l3.182 3.181l-1.415 1.415L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.817l1.415-1.414L12 10.585l3.182-3.181z"></svg:path>`,
})
export class TdesignCloseOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
