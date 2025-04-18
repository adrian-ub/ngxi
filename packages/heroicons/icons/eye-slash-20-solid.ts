import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEyeSlash20SolidIcon],svg[heroicons-eye-slash-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.03 10.03 0 0 0 3.3-4.38a1.65 1.65 0 0 0 0-1.185A10 10 0 0 0 9.999 3a9.96 9.96 0 0 0-4.744 1.194zm4.472 4.47l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092A4 4 0 0 0 7.752 6.69" clip-rule="evenodd"></svg:path><svg:path d="m10.748 13.93l2.523 2.523a10 10 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.65 1.65 0 0 1 0-1.186A10 10 0 0 1 2.839 6.02L6.07 9.252Q6 9.616 6 10a4 4 0 0 0 4.748 3.93"></svg:path></svg:g>`,
})
export class HeroiconsEyeSlash20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
