import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCodeIcon],svg[rivet-icons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.926 14.412L.155 8l5.77-6.412l1.487 1.338L2.845 8l4.567 5.074zm4.148-12.824L15.845 8l-5.77 6.412l-1.487-1.338L13.155 8L8.588 2.926z"></svg:path>`,
})
export class RivetIconsCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
