import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloud48RegularIcon],svg[fluent-cloud-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 11.5a9.5 9.5 0 0 0-9.497 9.721a1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h25a6 6 0 0 0 0-12h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221a9.5 9.5 0 0 0-9.5-9.5M12.041 20C12.55 13.84 17.71 9 24 9s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 0 17h-25a8.5 8.5 0 0 1 0-17z"></svg:path>`,
})
export class FluentCloud48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
