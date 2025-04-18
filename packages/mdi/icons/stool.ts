import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoolIcon],svg[mdi-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0-2.21-1.79-4-4-4H8C5.78 2 4 3.79 4 6v2h3L4 22h2l1.5-7H11v7h2v-7h3.5l1.5 7h2L17 8h3zM7.93 13L9 8h2v5zm8.14 0H13V8h2z"></svg:path>`,
})
export class MdiStoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
