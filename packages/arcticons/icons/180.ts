import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons180Icon],svg[arcticons-180-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 13.417l3.492-1.902m0 0v13.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.245 26.357a4.627 4.627 0 1 0 9.255 0v-4.714a4.627 4.627 0 1 0-9.255 0zM20.106 24a3.49 3.49 0 0 0-3.492 3.492h0a3.49 3.49 0 0 0 3.492 3.493h2.27a3.49 3.49 0 0 0 3.493-3.493h0A3.49 3.49 0 0 0 22.376 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.376 24a3.49 3.49 0 0 0 3.493-3.492h0a3.49 3.49 0 0 0-3.493-3.493h-2.27a3.49 3.49 0 0 0-3.492 3.493h0A3.49 3.49 0 0 0 20.106 24m0 0h2.27"></svg:path>`,
})
export class Arcticons180Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
