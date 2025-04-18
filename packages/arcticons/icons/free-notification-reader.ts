import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreeNotificationReaderIcon],svg[arcticons-free-notification-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24M24 2.5v43M45.5 24h-43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.69 17.309a1.5 1.5 0 0 1-1.5-1.5c0-.397.158-.755.41-1.024c-.116-.016-.23-.035-.35-.035a2.5 2.5 0 1 0 2.5 2.5c0-.12-.02-.234-.035-.35a1.5 1.5 0 0 1-1.024.409Z"></svg:path><svg:circle cx="24" cy="24" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 35.056c6.106 0 11.056-4.95 11.056-11.056"></svg:path>`,
})
export class ArcticonsFreeNotificationReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
