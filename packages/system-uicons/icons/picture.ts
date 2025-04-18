import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPictureIcon],svg[system-uicons-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" transform="translate(3 3)"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:path d="m14.5 10.5l-3-3l-3 2.985m4 4.015l-9-9l-3 3"></svg:path></svg:g><svg:circle cx="11" cy="4" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsPictureIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
