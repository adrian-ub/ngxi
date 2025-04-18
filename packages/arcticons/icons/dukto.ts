import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDuktoIcon],svg[arcticons-dukto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.614 4.5h8.772c6.199 0 11.19.791 11.19 1.774v14.662c0 .983-4.991 1.774-11.19 1.774h-8.772c-6.199 0-11.19-.791-11.19-1.774V6.274c0-.983 4.991-1.774 11.19-1.774M33.99 23.22l.003.049v18.427c0 1-4.491 1.804-10.07 1.804s-10.07-.805-10.07-1.804V23.269l.004-.048"></svg:path>`,
})
export class ArcticonsDuktoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
