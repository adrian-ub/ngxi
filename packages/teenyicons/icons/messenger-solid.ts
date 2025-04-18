import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMessengerSolidIcon],svg[teenyicons-messenger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.196C0 3.2 3.379 0 7.5 0S15 3.201 15 7.196s-3.379 7.195-7.5 7.195a7.8 7.8 0 0 1-2.72-.489l-2.242 1.05a.5.5 0 0 1-.694-.583l.526-1.932C.918 11.129 0 9.269 0 7.196m8.516 1.441l3.304-2.753l-.64-.768l-2.696 2.247L6.507 5.88L2.71 8.593l.582.814L6.493 7.12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMessengerSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
