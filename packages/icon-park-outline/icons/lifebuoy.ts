import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLifebuoyIcon],svg[icon-park-outline-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284s-20.474-7.81-28.284 0s-7.81 20.474 0 28.284s20.474 7.81 28.284 0m-5.657-22.627c4.687 4.686 4.687 12.284 0 16.97c-4.686 4.687-12.284 4.687-16.97 0c-4.687-4.686-4.687-12.284 0-16.97c4.686-4.687 12.284-4.687 16.97 0" clip-rule="evenodd"></svg:path><svg:path d="m38.142 38.142l-5.657-5.657M9.858 38.142l5.657-5.657M9.858 9.858l5.657 5.657m22.627-5.657l-5.657 5.657m0 16.97c4.687-4.686 4.687-12.284 0-16.97c-4.686-4.687-12.284-4.687-16.97 0c-4.687 4.686-4.687 12.284 0 16.97c4.686 4.687 12.284 4.687 16.97 0"></svg:path></svg:g>`,
})
export class IconParkOutlineLifebuoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
