import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperIcon],svg[mdi-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H4V8h16m0 7h-7v-2h7m0 6h-7v-2h7m-9 2H4v-6h7m9.33-8.33L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V3z"></svg:path>`,
})
export class MdiNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
