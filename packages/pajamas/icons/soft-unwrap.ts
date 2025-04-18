import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSoftUnwrapIcon],svg[pajamas-soft-unwrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.75 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm9 6a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-4.56 0l-.97-.97a.75.75 0 0 1 1.06-1.06l2.25 2.25l.53.53l-.53.53l-2.25 2.25a.75.75 0 0 1-1.06-1.06l.97-.97H.75a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSoftUnwrapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
