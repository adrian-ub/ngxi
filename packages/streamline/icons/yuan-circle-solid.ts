import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineYuanCircleSolidIcon],svg[streamline-yuan-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14M9.87 2.999a.625.625 0 0 1 .127.875L7.706 6.939v.02h1.253a.625.625 0 0 1 0 1.25H7.706v.861h1.253a.625.625 0 0 1 0 1.25H7.706v.459a.625.625 0 1 1-1.25 0v-.459H5.19a.625.625 0 0 1 0-1.25h1.265v-.862H5.19a.625.625 0 0 1 0-1.25h1.265V6.94L4.154 3.875a.625.625 0 1 1 1-.75L7.08 5.688l1.915-2.563a.625.625 0 0 1 .875-.127Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineYuanCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
