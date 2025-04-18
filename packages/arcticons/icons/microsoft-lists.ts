import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftListsIcon],svg[arcticons-microsoft-lists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5H14.75L5.5 14.75V38.5a4 4 0 0 0 4 4h23.75l9.25-9.25V9.5a4 4 0 0 0-4-4m-33 27.75h37M5.5 24h37m-37-9.25h37m-27.75 0V42.5"></svg:path>`,
})
export class ArcticonsMicrosoftListsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
