import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPresentationIcon],svg[mynaui-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4h18m-1.9 0v9.778c0 .471-.19.923-.527 1.257c-.338.333-.796.52-1.273.52H6.7c-.477 0-.935-.187-1.273-.52a1.77 1.77 0 0 1-.527-1.257V4m2.6 16l4.5-4.444L16.5 20"></svg:path>`,
})
export class MynauiPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
