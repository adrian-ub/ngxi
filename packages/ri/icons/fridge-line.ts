import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFridgeLineIcon],svg[ri-fridge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.998 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 11h-12v9h12zm-8 2v4h-2v-4zm8-11h-12v7h12zm-8 2v3h-2V5z"></svg:path>`,
})
export class RiFridgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
