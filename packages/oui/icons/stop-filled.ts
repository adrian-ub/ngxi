import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStopFilledIcon],svg[oui-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="2" y="2" fill="currentColor" fill-rule="evenodd" rx="2"></svg:rect>`,
})
export class OuiStopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
