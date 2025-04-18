import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNotificationMultipleSharpIcon],svg[material-symbols-light-notification-multiple-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 21V8.154h1V20H17v1zm3-3V7.915l8-4.684l.98.579L6.7 8.389l6.8 4l7.039-4.143l.961.612V18zm7.773-7.577l-2.107-2.107l.707-.708l1.4 1.4l3.55-3.55l.708.707z"></svg:path>`,
})
export class MaterialSymbolsLightNotificationMultipleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
