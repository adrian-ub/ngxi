import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderOpenIcon],svg[hugeicons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12.006h-6.968c-.827 0-1.791-.098-2.463.485c-.415.36-.628.935-1.054 2.085L5.947 20.65l-.027.075a1.98 1.98 0 0 1-1.794 1.274M19 12.006V11c0-1.414 0-2.121-.434-2.56S17.434 8 16.036 8H9.95M19 12.006c1.584 0 2.167 0 2.601.44a1.5 1.5 0 0 1 .314.47c.242.57-.052 1.315-.64 2.804l-.528 1.333c-.921 2.33-1.382 3.496-2.329 4.18a4 4 0 0 1-.2.136c-.987.626-2.24.622-4.747.614L4.126 22m0 0h-.01l-.08.001h-.108A1.99 1.99 0 0 1 2 20.047V9c0-1.886 0-2.828.579-3.414C3.157 5 4.089 5 5.95 5h.203c.978 0 1.467 0 1.895.202c.913.43 1.47 1.726 1.9 2.798m0 0H7.926m14.072-5l-1 2a5 5 0 0 0-8.584-1" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
