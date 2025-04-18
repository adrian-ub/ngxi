import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBookmark20SolidIcon],svg[heroicons-bookmark-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2q-2.575.002-5.07.31A2.213 2.213 0 0 0 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.926 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41 41 0 0 0 10 2" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsBookmark20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
