import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPencilIcon],svg[pajamas-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 13.5v-1.879l7.28-7.28l1.88 1.879l-7.28 7.28zm10.22-8.341l.805-.805a.5.5 0 0 0 0-.708l-1.171-1.171a.5.5 0 0 0-.708 0l-.805.805l1.879 1.88ZM1 13.5V11l9.586-9.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L5 15H1z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
