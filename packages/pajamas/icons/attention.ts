import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasAttentionIcon],svg[pajamas-attention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.04 8l-3.174 5.5a1 1 0 0 0 .866 1.5h2.173a1 1 0 0 0 .724-.31L13 8L6.629 1.31A1 1 0 0 0 5.905 1H3.732a1 1 0 0 0-.866 1.5zm4.889 0L5.69 13.5H4.598L7.34 8.75L7.773 8l-.433-.75L4.598 2.5H5.69z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasAttentionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
