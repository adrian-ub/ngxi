import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeEditIcon],svg[mdi-home-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h5v-6h4v1.11l5.43-5.43zm9.04 8.14a.6.6 0 0 0-.39.16l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77l-1.28-1.28c-.1-.1-.24-.16-.38-.16m-1.98 1.74L13 18.94V21h2.06l6.05-6.07z"></svg:path>`,
})
export class MdiHomeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
