import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPlugFilledIcon],svg[carbon-plug-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v6a8.01 8.01 0 0 0 7 7.93V30h2v-6.07A8.01 8.01 0 0 0 24 16v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPlugFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
