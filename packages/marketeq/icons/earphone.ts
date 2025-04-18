import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEarphoneIcon],svg[marketeq-earphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 18.75v25m-25 0v-25z"></svg:path><svg:path stroke="#306CFE" d="M14.583 18.75h-4.166a2.083 2.083 0 0 1-2.084-2.083V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a6.25 6.25 0 0 1 6.25 6.25v0a6.25 6.25 0 0 1-6.25 6.25m20.834 0h4.166a2.083 2.083 0 0 0 2.084-2.083V8.333a2.083 2.083 0 0 0-2.084-2.083h-4.166a6.25 6.25 0 0 0-6.25 6.25v0a6.25 6.25 0 0 0 6.25 6.25"></svg:path></svg:g>`,
})
export class MarketeqEarphoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
