import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMaximize2Icon],svg[marketeq-maximize-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m20.833 29.167l-12.5 12.5m20.834-20.834l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M33.333 8.333h8.334v8.334m-25 25H8.333v-8.334"></svg:path></svg:g>`,
})
export class MarketeqMaximize2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
