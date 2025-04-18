import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMoonFillIcon],svg[lets-icons-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4c.292 0 .438 0 .578.042a1 1 0 0 1 .586 1.448c-.072.127-.29.338-.725.759A7.98 7.98 0 0 0 13 12c0 2.257.935 4.297 2.439 5.751c.435.421.653.632.725.76a1 1 0 0 1-.586 1.447C15.438 20 15.292 20 15 20a8 8 0 1 1 0-16" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsMoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
