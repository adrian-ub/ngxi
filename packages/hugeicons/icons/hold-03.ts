import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHold03Icon],svg[hugeicons-hold-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 9.5v4.667c0 2.173 0 3.26-.331 4.125a5 5 0 0 1-2.867 2.876c-.863.332-1.946.332-4.112.332c-1.137 0-1.705 0-2.233-.117a5 5 0 0 1-2.183-1.094c-.41-.355-.75-.81-1.433-1.722l-3.004-4.018a1.696 1.696 0 0 1 .033-2.073a1.683 1.683 0 0 1 2.51-.14l1.62 1.628V6a1.5 1.5 0 1 1 3 0m0 0V4a1.5 1.5 0 0 1 3 0v2m-3 0v4.5m3-4.5a1.5 1.5 0 0 1 3 0v2m-3-2v4.5m6 0V8a1.5 1.5 0 0 0-3 0m0 0v2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsHold03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
