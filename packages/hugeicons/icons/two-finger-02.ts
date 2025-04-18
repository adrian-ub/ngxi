import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger02Icon],svg[hugeicons-two-finger-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.263 22v-.864c0-.464-.013-.945-.238-1.351c-.244-.442-.63-.814-1.137-1.466q-.53-.679-1.055-1.361c-.477-.623-.985-1.4-1.298-2.068c-.343-.734-.405-1.622-.015-2.333c.186-.338.49-.773.985-1.341l2.238-2.314m0 4.539V8.902m0 0L7.704 5.2c0-.963.69-1.745 1.54-1.745s1.465.627 1.465 1.591l.1 4.953l-.1-6.254c0-.964.689-1.745 1.539-1.745s1.539.781 1.539 1.745l-.039 3.703l.012 3.555V9.998q0-.092-.008-.185m0 0l-.007-.051m.007.051c.006.03-.011-.08-.007-.051m0 0c0-1.194 2.055-.995 2.767.255M16.75 12v-1.146a1.8 1.8 0 0 0-.238-.838m0 0c2.439.046 3.074.838 3.236 2.065v3.247c-.003 1.726-.291 2.979-1.317 4.008c-.948 1.133-.725 1.767-.749 2.663" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
