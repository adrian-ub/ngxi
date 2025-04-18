import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAvocadoIcon],svg[hugeicons-avocado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5c0-1 .4-3 2-3m-2 16.041V13.96c0-.792.219-1.126 1.152-.88a2.99 2.99 0 0 1 0 5.841c-.933.247-1.152-.087-1.152-.879"></svg:path><svg:path d="M12 5C9.607 5 7.667 6.79 7.667 9c0 1.224-.278 2.598-1.029 3.607A5.66 5.66 0 0 0 5.5 16c0 3.314 2.91 6 6.5 6s6.5-2.686 6.5-6c0-1.26-.42-2.428-1.138-3.393c-.751-1.009-1.029-2.383-1.029-3.607c0-2.21-1.94-4-4.333-4"></svg:path></svg:g>`,
})
export class HugeiconsAvocadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
