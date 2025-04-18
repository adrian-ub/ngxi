import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesElectionDebateSolidIcon],svg[bubbles-election-debate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 19H1a1 1 0 0 0 0 2h.15l.36 2.18a1 1 0 0 0 1 .84h6a1 1 0 0 0 1-.84L9.85 21H10a1 1 0 0 0 0-2m13 0h-9a1 1 0 0 0 0 2h.15l.36 2.18a1 1 0 0 0 1 .84h6a1 1 0 0 0 1-.84l.34-2.18H23a1 1 0 0 0 0-2M5.5 14.37a2.2 2.2 0 0 0 1.35-3.93h-.07l-.07-.05l-.07-.05a2 2 0 0 0-.32-.15H5.13L5 10a2.2 2.2 0 0 0 .5 4.34zM2.33 18h6.34a.25.25 0 0 0 .2-.1a.27.27 0 0 0 0-.23a3.59 3.59 0 0 0-6.82 0a.27.27 0 0 0 0 .23a.28.28 0 0 0 .28.1M19 10h-1.25A2.2 2.2 0 1 0 19 10"></svg:path><svg:path d="M8.8 10.5h1l3.36 2.88a.47.47 0 0 0 .53.07A.48.48 0 0 0 14 13v-2.5h1.2a3.69 3.69 0 0 1 3.3-2q.25-.015.5 0V1.69A1.69 1.69 0 0 0 17.31 0H6.69A1.69 1.69 0 0 0 5 1.69v6.82q.25-.015.5 0a3.71 3.71 0 0 1 3.3 1.99m6.29 7.14a.27.27 0 0 0 0 .23a.28.28 0 0 0 .21.1h6.34a.25.25 0 0 0 .2-.1a.27.27 0 0 0 0-.23a3.59 3.59 0 0 0-6.82 0z"></svg:path></svg:g>`,
})
export class BubblesElectionDebateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
