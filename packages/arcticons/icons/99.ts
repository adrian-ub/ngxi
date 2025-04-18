import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons99Icon],svg[arcticons-99-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17.52" cy="21.62" r="4.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.28 29.38a4.35 4.35 0 0 0 3.88 1.76h.36a4.75 4.75 0 0 0 4.76-4.76v-4.76"></svg:path><svg:circle cx="30.48" cy="21.62" r="4.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.25 29.38a4.35 4.35 0 0 0 3.88 1.76h.35a4.74 4.74 0 0 0 4.76-4.76v-4.76"></svg:path>`,
})
export class Arcticons99Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
