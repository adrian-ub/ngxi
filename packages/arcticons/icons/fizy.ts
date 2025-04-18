import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFizyIcon],svg[arcticons-fizy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.141 24.964v2.893A2.15 2.15 0 0 1 31.998 30c-.643 0-1.178-.214-1.5-.643"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.141 21.321v3.536c0 1.179-.964 2.143-2.143 2.143s-2.143-.964-2.143-2.143v-3.536m-6.646 0h4.285l-4.285 5.786h4.285"></svg:path><svg:circle cx="20.638" cy="18.75" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.638 21.321v5.786m-5.494 0v-7.179c0-.857.643-1.5 1.5-1.5h0c.75 0 1.179.215 1.5.643m-4.285 2.25h3"></svg:path>`,
})
export class ArcticonsFizyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
