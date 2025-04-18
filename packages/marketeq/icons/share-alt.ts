import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqShareAltIcon],svg[marketeq-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m33.333 6.25l10.417 8.333l-10.417 8.334V18.75s-10.416 0-14.583 6.25c0 0 2.083-12.5 14.583-14.583z"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083v12.5a2.083 2.083 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V12.5a2.083 2.083 0 0 1 2.083-2.083h8.334"></svg:path></svg:g>`,
})
export class MarketeqShareAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
