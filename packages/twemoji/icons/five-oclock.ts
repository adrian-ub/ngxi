import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFiveOclockIcon],svg[twemoji-five-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#99AAB5"></svg:circle><svg:circle cx="18" cy="18" r="14" fill="#E1E8ED"></svg:circle><svg:path fill="#66757F" d="M19 18a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0z"></svg:path><svg:path fill="#66757F" d="M23 26.661a1 1 0 0 1-1.367-.366l-4.5-7.795a1 1 0 0 1 1.732-1l4.5 7.795A1 1 0 0 1 23 26.661"></svg:path>`,
})
export class TwemojiFiveOclockIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
