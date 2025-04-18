import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardAlt2Icon],svg[lets-icons-mortarboard-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M19.5 9h-15a1.5 1.5 0 1 1 0-3h15a1.5 1.5 0 0 1 0 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 9v4"></svg:path><svg:path stroke-linejoin="round" d="m8 9l-.982 6.872a.15.15 0 0 0 .106.165l4.833 1.45a.15.15 0 0 0 .086 0l4.833-1.45a.15.15 0 0 0 .106-.165L16 9"></svg:path><svg:path stroke-linejoin="round" d="m7.5 13l4.467.993a.2.2 0 0 0 .066 0L16.5 13"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
