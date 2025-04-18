import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteAwardSolidIcon],svg[flowbite-award-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 9a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill-rule="evenodd" d="M9.896 3.051a2.68 2.68 0 0 1 4.208 0c.147.186.38.282.615.255a2.68 2.68 0 0 1 2.976 2.975a.68.68 0 0 0 .254.615a2.68 2.68 0 0 1 0 4.208a.68.68 0 0 0-.254.615a2.68 2.68 0 0 1-2.976 2.976a.68.68 0 0 0-.615.254a2.682 2.682 0 0 1-4.208 0a.68.68 0 0 0-.614-.255a2.68 2.68 0 0 1-2.976-2.975a.68.68 0 0 0-.255-.615a2.68 2.68 0 0 1 0-4.208a.68.68 0 0 0 .255-.615a2.68 2.68 0 0 1 2.976-2.975a.68.68 0 0 0 .614-.255M12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path d="M5.395 15.055L4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65l1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.64 4.64 0 0 1-2.515-1.208a4.67 4.67 0 0 1-3.411-1.656Zm7.269 2.867l1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707l1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.67 4.67 0 0 1-3.4 1.642a4.64 4.64 0 0 1-2.53 1.21Z"></svg:path></svg:g>`,
})
export class FlowbiteAwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
