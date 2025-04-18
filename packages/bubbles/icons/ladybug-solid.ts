import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLadybugSolidIcon],svg[bubbles-ladybug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.82 15.55l-.9-.3q.078-.623.08-1.25a10 10 0 0 0-.15-1.73l1-.32a1.002 1.002 0 0 0-.64-1.9l-.87.29a10.1 10.1 0 0 0-1.66-2.74a2.11 2.11 0 0 1 1.82-1.1a1 1 0 1 0 0-2a4 4 0 0 0-3.27 1.69a9.5 9.5 0 0 0-1.73-1.12a4.45 4.45 0 0 0-.7-2.47q.342-.551.59-1.15a1 1 0 1 0-1.78-.9l-.3.59a4.49 4.49 0 0 0-4.62 0l-.3-.59a1 1 0 1 0-1.78.9q.259.594.59 1.15a4.45 4.45 0 0 0-.7 2.47a9.5 9.5 0 0 0-1.73 1.12A4 4 0 0 0 2.5 4.5a1 1 0 1 0 0 2a2.13 2.13 0 0 1 1.82 1.1a10.1 10.1 0 0 0-1.63 2.74l-.87-.29A1.026 1.026 0 0 0 1.18 12l1 .32A10 10 0 0 0 2 14q.002.627.08 1.25l-.9.3a1 1 0 0 0 .32 1.95a3.5 3.5 0 0 0 1-.29a10 10 0 0 0 18.94 0a3.5 3.5 0 0 0 1 .29a1 1 0 0 0 .32-1.95zm-6.55 5.21A8 8 0 0 1 13 21.94V17.1a3.259 3.259 0 0 0 0-6.2V6.06a8.1 8.1 0 0 1 3.28 1.18a3 3 0 0 0 3.3 4.2a8 8 0 0 1 0 5.12a3 3 0 0 0-3.31 4.2m-8.55 0a3 3 0 0 0-3.3-4.2a8 8 0 0 1 0-5.12a3 3 0 0 0 3.3-4.2A7.9 7.9 0 0 1 11 6.06v4.84a3.26 3.26 0 0 0 0 6.2v4.84a8.1 8.1 0 0 1-3.28-1.18"></svg:path>`,
})
export class BubblesLadybugSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
