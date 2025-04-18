import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTeamviewerIcon],svg[hugeicons-teamviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M18.997 12.084c-.034.528-.505.929-1.447 1.73c-1.473 1.251-2.21 1.877-2.815 1.634a1 1 0 0 1-.178-.09c-.432-.273-.53-.938-.55-2.16H9.993c-.022 1.222-.119 1.887-.551 2.16a1 1 0 0 1-.178.09c-.606.243-1.342-.383-2.815-1.635c-.942-.8-1.413-1.2-1.447-1.73a1 1 0 0 1 0-.167c.034-.528.505-.929 1.447-1.73C7.923 8.936 8.66 8.31 9.265 8.553q.093.037.178.09c.42.265.523.9.549 2.056h4.016c.026-1.156.129-1.79.55-2.055q.084-.054.177-.091c.606-.243 1.342.383 2.815 1.635c.942.8 1.413 1.2 1.447 1.73q.006.083 0 .167"></svg:path></svg:g>`,
})
export class HugeiconsTeamviewerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
