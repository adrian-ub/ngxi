import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSymbolsIcon],svg[proicons-symbols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.9 3.918a1.955 1.955 0 0 1 2.765 0l.624.624l.624-.624a1.955 1.955 0 1 1 2.764 2.765l-.623.624l.005.005l-2.764 2.765l-.006-.006l-.006.006l-2.764-2.765l.005-.005l-.623-.624a1.955 1.955 0 0 1 0-2.765Z"></svg:path><svg:path stroke-linecap="round" d="M3.736 9.091a3.366 3.366 0 1 0 4.76-4.76m-4.76 4.76a3.366 3.366 0 1 1 4.76-4.76m-4.76 4.76l4.76-4.76M2.75 17.289h3.366m0 0H9.48m-3.365 0v-3.366m0 3.366v3.366m7.328-4.237a3.365 3.365 0 0 1 6.165-.812l.189.297m.262-1.98v1.98h-.262m-1.718 0h1.718m-6.47 4.752v-1.98h.267m1.714 0h-1.714m6.35-.515a3.366 3.366 0 0 1-6.165.812l-.185-.297"></svg:path></svg:g>`,
})
export class ProiconsSymbolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
