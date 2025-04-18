import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTvStand2Icon],svg[marketeq-tv-stand-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m18.75 35.417l2.083-8.334m18.75 0H10.417A2.083 2.083 0 0 1 8.333 25V8.333a2.083 2.083 0 0 1 2.084-2.083h29.166a2.083 2.083 0 0 1 2.084 2.083V25a2.083 2.083 0 0 1-2.084 2.083m-10.416 0l2.083 8.334z"></svg:path><svg:path stroke="#344054" d="M6.25 43.75h37.5v-8.333H6.25zm0 0H25v-8.333H6.25z"></svg:path></svg:g>`,
})
export class MarketeqTvStand2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
