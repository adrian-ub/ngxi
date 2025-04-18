import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1xbetIcon],svg[arcticons-1xbet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 18.657l4.024-2l-2.59 14.686M26.781 24l5.13 7.343m-10.26-14.686l3.215 4.528m9.634-4.528L19.061 31.343"></svg:path>`,
})
export class Arcticons1xbetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
