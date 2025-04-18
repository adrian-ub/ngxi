import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWritingFluentlyIcon],svg[icon-park-outline-writing-fluently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 24v-5L39 4l5 5l-15 15z" clip-rule="evenodd"></svg:path><svg:path d="M16 24H9a5 5 0 0 0 0 10h30a5 5 0 0 1 0 10H18"></svg:path></svg:g>`,
})
export class IconParkOutlineWritingFluentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
