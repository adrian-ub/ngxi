import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMoreTimeIcon],svg[material-symbols-more-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21q-1.875 0-3.512-.7t-2.863-1.925T2.7 15.512T2 12t.7-3.512t1.925-2.863T7.488 3.7T11 3q.525 0 1.013.063T13 3.25V5.3q-.5-.15-.987-.225T11 5Q8.05 5 6.025 7.025T4 12t2.025 4.975T11 19t4.975-2.025T18 12q0-.275-.025-.5T17.9 11h2.05q.05.275.05.5v.5q0 1.875-.7 3.513t-1.925 2.862t-2.863 1.925T11 21m2.8-4.8L10 12.4V7h2v4.6l3.2 3.2zM18 9V6h-3V4h3V1h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsMoreTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
