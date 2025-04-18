import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biSignStopLightsIcon],svg[bi-sign-stop-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path><svg:path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"></svg:path></svg:g>`,
})
export class BiSignStopLightsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
