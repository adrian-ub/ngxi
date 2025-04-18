import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiPillsIcon],svg[flat-ui-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EBECED" d="M92.872 7.105c9.478 9.476 9.478 24.832 0 34.308L41.414 92.869c-9.475 9.474-24.833 9.474-34.307 0c-9.476-9.475-9.476-24.832 0-34.308L58.565 7.105c9.475-9.473 24.834-9.473 34.307 0"></svg:path><svg:path fill="#3B97D3" d="M32.551 33.122L7.108 58.563c-9.476 9.476-9.476 24.833 0 34.308c9.474 9.475 24.832 9.475 34.307 0L66.853 67.43z"></svg:path><svg:path fill="#2086BF" d="M65.433 68.862L31.137 34.568l1.414-1.414l34.294 34.294z"></svg:path><svg:path fill="#55A6DC" d="M38.099 41.51L12.703 66.906a5.894 5.894 0 0 0 0 8.339a5.896 5.896 0 0 0 8.339 0l25.396-25.396z"></svg:path><svg:path fill="#EFF0F1" d="M75.247 12.7a5.897 5.897 0 0 0-8.343 0L39.513 40.096l8.339 8.339l27.396-27.396a5.9 5.9 0 0 0-.001-8.339"></svg:path><svg:path fill="#4F9ED4" d="m47.865 48.444l-1.414 1.414l-8.335-8.336l1.414-1.414z"></svg:path>`,
})
export class FlatUiPillsIcon {
  readonly viewBox = input("0 0 99.979 99.977")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
