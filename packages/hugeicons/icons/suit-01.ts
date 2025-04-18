import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSuit01Icon],svg[hugeicons-suit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 2c-1 0-.815 2.417-2.2 3.462c-1.032.777-2.907-.048-3.672 1.259c-.233.398-.118.924.112 1.975l1.99 9.089C4.62 19.567 4.858 21.743 7 22h10c2.141-.257 2.38-2.433 2.77-4.215l1.99-9.089c.23-1.051.345-1.577.112-1.975c-.765-1.307-2.64-.482-3.671-1.26C16.815 4.418 17 2 16 2m-3.991 9H12m.009 3.5H12m.009 3.5H12"></svg:path><svg:path d="M7.724 2.119c.932-.524 2.217.822 2.88 1.325c.907.687 1.36 1.03 1.393 1.484a1 1 0 0 1 0 .144c-.033.453-.486.797-1.392 1.484c-.664.503-1.95 1.849-2.88 1.325c-.966-.542-.966-5.22 0-5.762"></svg:path><svg:path d="M16.276 2.119c-.932-.524-2.217.822-2.88 1.325c-.907.687-1.36 1.03-1.393 1.484a1 1 0 0 0 0 .144c.033.453.486.797 1.392 1.484c.664.503 1.95 1.849 2.88 1.325c.966-.542.966-5.22 0-5.762"></svg:path></svg:g>`,
})
export class HugeiconsSuit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
