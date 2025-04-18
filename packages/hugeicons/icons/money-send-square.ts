import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneySendSquareIcon],svg[hugeicons-money-send-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.002 9.001c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.896 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1m-1.886-1v-1m0 7c-.87 0-1.612-.417-1.886-1m1.886 1v1"></svg:path><svg:path d="M13.5 2.501H12c-4.478 0-6.718 0-8.109 1.391S2.5 7.522 2.5 12.001c0 4.478 0 6.717 1.391 8.109C5.282 21.5 7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.391S21.5 16.48 21.5 12v-1.5m-5-3.001l4.176-4.178m.824 3.656l-.118-3.091c0-.729-.435-1.183-1.228-1.24l-3.124-.147"></svg:path></svg:g>`,
})
export class HugeiconsMoneySendSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
