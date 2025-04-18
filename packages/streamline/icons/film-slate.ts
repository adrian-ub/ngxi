import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmSlateIcon],svg[streamline-film-slate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.365 6.127h11.447v6.232a1 1 0 0 1-1 1H2.366a1 1 0 0 1-1-1zm-.001 0L12.42 3.164l-.48-1.79a1 1 0 0 0-1.225-.708L1.591 3.112a1 1 0 0 0-.707 1.224zm2.626 4.69h1.278m-.871-5.503l.64-3.126m2.972 2.158l.64-3.126"></svg:path>`,
})
export class StreamlineFilmSlateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
