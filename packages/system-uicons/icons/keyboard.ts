import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsKeyboardIcon],svg[system-uicons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5v-6a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></svg:path><svg:g fill="currentColor" transform="translate(1 5)"><svg:circle cx="3.5" cy="2.5" r="1"></svg:circle><svg:circle cx="6.5" cy="2.5" r="1"></svg:circle><svg:circle cx="9.5" cy="2.5" r="1"></svg:circle><svg:circle cx="12.5" cy="2.5" r="1"></svg:circle><svg:circle cx="15.5" cy="2.5" r="1"></svg:circle><svg:circle cx="3.5" cy="4.5" r="1"></svg:circle><svg:circle cx="6.5" cy="4.5" r="1"></svg:circle><svg:circle cx="9.5" cy="4.5" r="1"></svg:circle><svg:circle cx="12.5" cy="4.5" r="1"></svg:circle><svg:circle cx="15.5" cy="4.5" r="1"></svg:circle><svg:circle cx="3.5" cy="6.5" r="1"></svg:circle><svg:circle cx="6.5" cy="6.5" r="1"></svg:circle><svg:circle cx="9.5" cy="6.5" r="1"></svg:circle><svg:circle cx="12.5" cy="6.5" r="1"></svg:circle><svg:circle cx="15.5" cy="6.5" r="1"></svg:circle><svg:circle cx="3.5" cy="8.5" r="1"></svg:circle><svg:circle cx="15.5" cy="8.5" r="1"></svg:circle></svg:g><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5h6"></svg:path></svg:g>`,
})
export class SystemUiconsKeyboardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
