import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqClipboardAdd2Icon],svg[marketeq-clipboard-add-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 27.083V8.333a2.083 2.083 0 0 0-2.083-2.083h-25a2.083 2.083 0 0 0-2.084 2.083v33.334a2.083 2.083 0 0 0 2.084 2.083H25"></svg:path><svg:path stroke="#344054" d="M37.5 35.417v8.333M16.667 6.25h12.5v6.25a2.083 2.083 0 0 1-2.084 2.083H18.75a2.083 2.083 0 0 1-2.083-2.083zm0 29.167H25zm0-8.334h12.5zm16.666 12.5h8.334z"></svg:path></svg:g>`,
})
export class MarketeqClipboardAdd2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
