import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWritingFluentlyIcon],svg[icon-park-writing-fluently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 24V19L39 4L44 9L29 24H24Z" clip-rule="evenodd"></svg:path><svg:path d="M16 24H9C6.23858 24 4 26.2386 4 29C4 31.7614 6.23858 34 9 34H39C41.7614 34 44 36.2386 44 39C44 41.7614 41.7614 44 39 44H18"></svg:path></svg:g>`,
})
export class IconParkWritingFluentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
