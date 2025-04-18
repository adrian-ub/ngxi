import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKitchenCabinet2Icon],svg[marketeq-kitchen-cabinet-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 27.083h-4.166"></svg:path><svg:path stroke="#306CFE" d="M29.167 10.417H8.333v8.333h20.834zm12.5 0H8.333v29.166h33.334zm-35.417 0h37.5zm35.417 0h-12.5v29.166h12.5z"></svg:path></svg:g>`,
})
export class MarketeqKitchenCabinet2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
