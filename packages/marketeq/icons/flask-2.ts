import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFlask2Icon],svg[marketeq-flask-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 31.25a12.5 12.5 0 1 1-16.667-11.77V6.25h8.334v13.23A12.5 12.5 0 0 1 37.5 31.25"></svg:path><svg:path stroke="#344054" d="M18.75 6.25h12.5"></svg:path></svg:g>`,
})
export class MarketeqFlask2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
