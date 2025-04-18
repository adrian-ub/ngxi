import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBookOpen20SolidIcon],svg[heroicons-book-open-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 16.82A7.46 7.46 0 0 1 15 15.5a7.5 7.5 0 0 1 2.046.282a.75.75 0 0 0 .954-.722v-11a.75.75 0 0 0-.546-.721A9 9 0 0 0 15 3a8.96 8.96 0 0 0-4.25 1.065zM9.25 4.065A8.96 8.96 0 0 0 5 3a9 9 0 0 0-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.5 7.5 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32z"></svg:path>`,
})
export class HeroiconsBookOpen20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
