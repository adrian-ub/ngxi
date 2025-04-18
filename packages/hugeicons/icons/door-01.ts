import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoor01Icon],svg[hugeicons-door-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 9.204c0-2.073 0-3.11.358-3.951a4.2 4.2 0 0 1 1.364-1.747c.711-.526 1.666-.712 3.575-1.083c1.985-.385 2.977-.578 3.75-.27a3.06 3.06 0 0 1 1.532 1.365C15 4.275 15 5.353 15 7.51v8.982c0 2.156 0 3.234-.421 3.99a3.06 3.06 0 0 1-1.532 1.367c-.773.307-1.765.114-3.75-.271c-1.91-.371-2.864-.557-3.575-1.083a4.2 4.2 0 0 1-1.364-1.747C4 17.905 4 16.87 4 14.796zm11 10.594c1.447.15 3.4.614 4.438-.71c.562-.717.562-1.81.562-3.995V8.907c0-2.186 0-3.278-.562-3.995c-1.038-1.324-2.99-.86-4.438-.71M12 13v-2m7 8.727h3M2 20h3" color="currentColor"></svg:path>`,
})
export class HugeiconsDoor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
