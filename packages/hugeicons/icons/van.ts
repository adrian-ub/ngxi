import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVanIcon],svg[hugeicons-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 6l.954 3.86A1.5 1.5 0 0 0 14.41 11H20"></svg:path><svg:path d="M2 6h11.069c1.549 0 2.323 0 2.98.346c.656.346 1.094.985 1.97 2.262c.613.896 1.258 1.546 2.164 2.125c.912.582 1.346.867 1.586 1.324c.231.437.231.955.231 1.992c0 1.367 0 2.05-.413 2.484l-.054.054C21.1 17 20.416 17 19.05 17M5 17c-.32 0-.615 0-.77-.033c-.156-.034-.302-.1-.595-.231L2 16c0-3.194.479-5.038 1.106-6.55c.41-.992.616-1.488.53-1.93C3.553 7.08 2.5 6 2.5 6M9 17h6"></svg:path><svg:circle cx="17" cy="17" r="2"></svg:circle><svg:circle cx="7" cy="17" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsVanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
