import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledEqualsIcon],svg[openmoji-circled-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="36" cy="36" r="26.68" stroke-width="4.74"></svg:circle><svg:path stroke-width="8.031" d="M28.03 42.18h15.95M28.03 29.82h15.95" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiCircledEqualsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
