import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasAttentionSolidSmIcon],svg[pajamas-attention-solid-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 8L7.538 3.31A1 1 0 0 0 6.813 3H5.732a1 1 0 0 0-.866 1.5L6.886 8l-2.02 3.5a1 1 0 0 0 .866 1.5h1.081a1 1 0 0 0 .725-.31z"></svg:path>`,
})
export class PajamasAttentionSolidSmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
