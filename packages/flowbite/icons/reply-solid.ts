import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteReplySolidIcon],svg[flowbite-reply-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.502 7.046h-2.5v-.928a2.12 2.12 0 0 0-1.199-1.954a1.83 1.83 0 0 0-1.984.311L3.71 8.965a2.2 2.2 0 0 0 0 3.24L8.82 16.7a1.83 1.83 0 0 0 1.985.31a2.12 2.12 0 0 0 1.199-1.959v-.928h1a2.025 2.025 0 0 1 1.999 2.047V19a1 1 0 0 0 1.275.961a6.59 6.59 0 0 0 4.662-7.22a6.59 6.59 0 0 0-6.437-5.695Z"></svg:path>`,
})
export class FlowbiteReplySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
