import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNotificationImportantIcon],svg[ic-sharp-notification-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V1.5h-3v2.67C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-6-1h-2v-2h2zm0-4h-2V8h2z"></svg:path>`,
})
export class IcSharpNotificationImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
