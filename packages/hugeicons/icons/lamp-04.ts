import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLamp04Icon],svg[hugeicons-lamp-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-3v-4m0 10v-3m-4 3h8m-.974-10H8.974c-2.212 0-3.318 0-3.787-.685c-.469-.686-.015-1.64.893-3.546l1.623-3.41c.546-1.145.818-1.718 1.342-2.038C9.57 2 10.234 2 11.562 2h.876c1.328 0 1.992 0 2.516.32c.525.321.797.894 1.343 2.039l1.623 3.41c.908 1.907 1.362 2.86.893 3.546S17.238 12 15.026 12" color="currentColor"></svg:path>`,
})
export class HugeiconsLamp04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
