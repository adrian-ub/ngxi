import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTonuinoNfcToolsIcon],svg[arcticons-tonuino-nfc-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.422" height="35.002" x="16.647" y="8.498" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.647 39.502h-1.874a1.84 1.84 0 0 1-1.843-1.842V6.342A1.84 1.84 0 0 1 14.773 4.5H29.51a1.84 1.84 0 0 1 1.842 1.842v2.156m-14.705 3.943H35.07m-13.783-1.886h6.044"></svg:path><svg:circle cx="30.12" cy="10.555" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.362 30.957l-8.186-4.726v9.452zm-2.112-6.83a3.73 3.73 0 0 0-4.764-.013v.013m7.038-2.585a7.33 7.33 0 0 0-9.331 0"></svg:path>`,
})
export class ArcticonsTonuinoNfcToolsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
