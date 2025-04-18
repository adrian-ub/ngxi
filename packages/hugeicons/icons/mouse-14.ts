import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouse14Icon],svg[hugeicons-mouse-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.167c-.418.797-1.345 1.07-2.069.61l-2.186-1.388c-1.65-1.047-2.474-1.57-3.282-1.332c-.557.164-.956.646-1.463 1.525M5.185 18.994c4.295 2.437 7.09.118 9.184-3.448s2.74-7.103-1.554-9.54s-7.09-.118-9.184 3.448s-2.74 7.103 1.554 9.54m6.303-10.996l-1 1.732" color="currentColor"></svg:path>`,
})
export class HugeiconsMouse14Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
