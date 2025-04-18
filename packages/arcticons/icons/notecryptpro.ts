import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotecryptproIcon],svg[arcticons-notecryptpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2Zm-11-11l11 11"></svg:path><svg:rect width="17.96" height="12.57" x="15.02" y="27.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.09"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 31.11a1.42 1.42 0 0 1 1.42 1.43a1.39 1.39 0 0 1-.55 1.12l.67 2.34h-3.08l.67-2.35a1.39 1.39 0 0 1-.55-1.12A1.42 1.42 0 0 1 24 31.11m-5.94-3.83v-2.49a5.94 5.94 0 1 1 11.88 0v2.49"></svg:path>`,
})
export class ArcticonsNotecryptproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
