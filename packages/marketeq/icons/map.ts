import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMapIcon],svg[marketeq-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 20.833V43.75m6.458-37.5l8.334 14.583zM43.75 20.833H6.25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 41.667V8.333c0-1.15-.933-2.083-2.083-2.083H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMapIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
