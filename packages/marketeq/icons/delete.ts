import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDeleteIcon],svg[marketeq-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 14.583v-6.25A2.083 2.083 0 0 0 31.25 6.25h-12.5a2.083 2.083 0 0 0-2.083 2.083v6.25"></svg:path><svg:path stroke="#306CFE" d="M8.333 14.583h33.334M37.5 41.667V14.583h-25v27.084a2.083 2.083 0 0 0 2.083 2.083h20.834a2.083 2.083 0 0 0 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDeleteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
