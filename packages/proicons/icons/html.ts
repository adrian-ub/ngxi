import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHtmlIcon],svg[proicons-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m20.754 4.792l-2.84 14.31a1.5 1.5 0 0 1-1.099 1.161l-4.069 1.045a3 3 0 0 1-1.492 0l-4.07-1.045a1.5 1.5 0 0 1-1.097-1.16L3.246 4.792A1.5 1.5 0 0 1 4.717 3h14.566a1.5 1.5 0 0 1 1.471 1.792"></svg:path><svg:path d="M17 6.881H7.732a.6.6 0 0 0-.589.718l.859 4.292h7.996l-.891 4.458a1 1 0 0 1-.64.744l-2.126.77a1 1 0 0 1-.681 0l-2.127-.77a1 1 0 0 1-.64-.744l-.224-1.119"></svg:path></svg:g>`,
})
export class ProiconsHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
