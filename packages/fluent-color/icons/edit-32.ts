import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorEdit32Icon],svg[fluent-color-edit-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorEdit320)" d="M4.356 20.729L19.69 5.396l6.914 6.914L11.27 27.643l-5.579-1.336z"></svg:path><svg:path fill="url(#fluentColorEdit321)" d="m4.357 20.73l.497-.5s.275 2.396 2.397 4.518s4.517 2.397 4.517 2.397l-.497.498a3.7 3.7 0 0 1-1.841 1.002l-6.22 1.333a1 1 0 0 1-1.188-1.187l1.333-6.221a3.7 3.7 0 0 1 1.002-1.84"></svg:path><svg:path fill="url(#fluentColorEdit322)" d="M21.65 3.434a4.89 4.89 0 0 1 6.915 6.914l-3.73 3.73l-6.914-6.915z"></svg:path><svg:path fill="url(#fluentColorEdit323)" d="m24.32 14.593l2.83-2.83s-2.398-.278-4.517-2.397c-2.12-2.12-2.397-4.518-2.397-4.518l-2.83 2.83s.276 2.4 2.396 4.519s4.518 2.396 4.518 2.396"></svg:path><svg:defs><svg:lineargradient id="fluentColorEdit320" x1="17.289" x2="20.469" y1="11.417" y2="19.854" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit321" x1=".094" x2="7.473" y1="23.098" y2="30.333" gradientUnits="userSpaceOnUse"><svg:stop offset=".255" stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit322" x1="27.449" x2="23.03" y1="4.494" y2="8.717" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit323" x1="22.46" x2="15.56" y1="11.523" y2="8.595" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#FFE994"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorEdit32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
