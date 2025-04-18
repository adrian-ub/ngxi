import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNepalIcon],svg[openmoji-flag-nepal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M30 42.773L31.206 42l.658 1.272l1.43-.066l-.066 1.431l1.272.657l-.773 1.206l.773 1.206l-1.272.657l.066 1.431l-1.43-.066L31.206 51L30 50.227L28.794 51l-.657-1.272l-1.431.066l.066-1.431l-1.272-.657l.773-1.206l-.773-1.206l1.272-.657l-.066-1.431l1.431.066l.657-1.272z"></svg:path><svg:circle cx="30" cy="30" r="2"></svg:circle><svg:path fill="none" stroke-width="1.5" d="M34 31c-.45 1-1.719 2-4 2s-3.55-1-4-2"></svg:path></svg:g><svg:g stroke-linecap="round" stroke-linejoin="round"><svg:path fill="#d22f27" d="M50 55H22V17l28 20H33z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M30 42.773L31.206 42l.658 1.272l1.43-.066l-.066 1.431l1.272.657l-.773 1.206l.773 1.206l-1.272.657l.066 1.431l-1.43-.066L31.206 51L30 50.227L28.794 51l-.657-1.272l-1.431.066l.066-1.431l-1.272-.657l.773-1.206l-.773-1.206l1.272-.657l-.066-1.431l1.431.066l.657-1.272z"></svg:path><svg:circle cx="30" cy="30" r="2" fill="#fff" stroke="#fff"></svg:circle><svg:path fill="none" stroke="#fff" stroke-width="1.5" d="M34 31c-.45 1-1.719 2-4 2s-3.55-1-4-2"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 55H22V17l28 20H33z"></svg:path><svg:path fill="none" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 55H22V17l28 20H33z"></svg:path>`,
})
export class OpenmojiFlagNepalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
