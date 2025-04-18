import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSelect01Icon],svg[carbon-select-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H8V2H6v4H2v2h4v4h2V8h4zm4 0h4v2h-4zm8 0v2h4v4h2V8a2 2 0 0 0-2-2zM6 16h2v4H6zm2 12v-4H6v4a2 2 0 0 0 2 2h4v-2zm20-12h2v4h-2zM16 28h4v2h-4zm12-4v4h-4v2h4a2 2 0 0 0 2-2v-4z"></svg:path>`,
})
export class CarbonSelect01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
