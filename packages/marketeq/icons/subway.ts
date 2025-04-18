import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSubwayIcon],svg[marketeq-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 39.583h16.666M18.75 31.25l-4.167 12.5zm16.667 12.5l-4.167-12.5zM20.833 22.917h8.334"></svg:path><svg:path stroke="#306CFE" d="M20.833 6.25h8.334a8.333 8.333 0 0 1 8.333 8.333v14.584a2.083 2.083 0 0 1-2.083 2.083H14.583a2.083 2.083 0 0 1-2.083-2.083V14.583a8.333 8.333 0 0 1 8.333-8.333"></svg:path></svg:g>`,
})
export class MarketeqSubwayIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
