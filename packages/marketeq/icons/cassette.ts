import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCassetteIcon],svg[marketeq-cassette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 18.75H14.583m18.75 12.5H16.667l-2.084 8.333h20.834z"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqCassetteIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
