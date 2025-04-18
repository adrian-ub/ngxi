import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPagerIcon],svg[fluent-emoji-flat-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#636363" d="M27 30H5c-1.66 0-3-1.34-3-3V12c0-1.66 1.34-3 3-3h22c1.66 0 3 1.34 3 3v15c0 1.66-1.34 3-3 3"></svg:path><svg:path fill="#00D26A" d="M5 22.5c-.55 0-1-.45-1-1V12c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v9.5c0 .55-.45 1-1 1z"></svg:path><svg:path fill="#9B9B9B" d="M14.97 28h4.99c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-4.99c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m-9.48 0h4.99c.83 0 1.5-.67 1.51-1.49c0-.83-.67-1.5-1.5-1.5H5.5c-.83 0-1.5.67-1.5 1.5c0 .82.67 1.49 1.49 1.49"></svg:path><svg:path fill="#CA0B4A" d="M26.49 28h-2.04c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h2.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path><svg:path fill="#008463" d="M8.51 15.25c0 .55.45 1 1 1c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm0 3.99c0 .55.45 1 1 1c.56 0 1-.44 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm5-2.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c-.01.55-.45 1-1 1m-1 2.99c0 .55.45 1 1 1s.99-.44 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm5.98-2.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.44 1-1 1m-1 2.99c0 .55.45 1 1 1c.56 0 1-.44 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm5-2.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c-.01.55-.45 1-1 1m-1 2.99c0 .55.45 1 1 1s.99-.44 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPagerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
