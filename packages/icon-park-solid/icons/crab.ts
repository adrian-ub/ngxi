import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCrabIcon],svg[icon-park-solid-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 17C5 12 6 2 17 6c.946 3.782-2 11-12 11m38 0c0-5-1-15-12-11c-.946 3.782 2 11 12 11"></svg:path><svg:rect width="32" height="20" x="8" y="22" fill="currentColor" rx="10"></svg:rect><svg:path d="M27 22v-4m-6 4v-4m22-1c1 3 1 9-3 12M5 17c-1 3 0 8 3 12m22 13h14l-4-9m-22 9H4l4-9"></svg:path></svg:g>`,
})
export class IconParkSolidCrabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
