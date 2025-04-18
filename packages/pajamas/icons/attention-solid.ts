import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasAttentionSolidIcon],svg[pajamas-attention-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8L6.629 1.31A1 1 0 0 0 5.905 1H3.732a1 1 0 0 0-.866 1.5L6.04 8l-3.175 5.5a1 1 0 0 0 .866 1.5h2.173a1 1 0 0 0 .724-.31z"></svg:path>`,
})
export class PajamasAttentionSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
