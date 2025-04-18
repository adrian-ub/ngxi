import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFloatImageOutlineIcon],svg[bubbles-float-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H13.5a.75.75 0 0 1-.75-.75m0-4.5A.75.75 0 0 1 13.5 0h9.75a.75.75 0 0 1 0 1.5H13.5a.75.75 0 0 1-.75-.75m0 9A.75.75 0 0 1 13.5 9h9.75a.75.75 0 0 1 0 1.5H13.5a.75.75 0 0 1-.75-.75M0 14.25a.75.75 0 0 1 .75-.75h22.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75m0 4.5A.75.75 0 0 1 .75 18h22.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75m0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75M0 .75A.75.75 0 0 1 .75 0h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-9A.75.75 0 0 1 0 9.75zm1.5.75V9H9V1.5z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesFloatImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
