import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlameIcon],svg[system-uicons-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 19c3.038 0 5.5-2.429 5.5-6.714Q16 8 10.5 3Q5 8 5 12.286C5 16.57 7.462 19 10.5 19"></svg:path><svg:path d="M10.5 19c1.519 0 2.75-1.214 2.75-3.357q0-2.143-2.75-4.643q-2.75 2.5-2.75 4.643C7.75 17.786 8.981 19 10.5 19"></svg:path></svg:g>`,
})
export class SystemUiconsFlameIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
