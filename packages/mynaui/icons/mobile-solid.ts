import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSolidIcon],svg[mynaui-mobile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4.8c0-1.373 1.07-2.55 2.464-2.55h8.572c1.395 0 2.464 1.177 2.464 2.55v14.4c0 1.373-1.07 2.55-2.464 2.55H7.714c-1.395 0-2.464-1.177-2.464-2.55zm5.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMobileSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
