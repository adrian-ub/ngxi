import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFlushedFaceIcon],svg[fluent-emoji-flat-flushed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#FF6723" d="M11 21c0 1.105-1.343 2-3 2s-3-.895-3-2s1.343-2 3-2s3 .895 3 2m16 0c0 1.105-1.343 2-3 2s-3-.895-3-2s1.343-2 3-2s3 .895 3 2"></svg:path><svg:path fill="#fff" d="M10.5 18a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path fill="#402A32" d="M12 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8.07 7.988c-.594.562-.952 1.24-1.096 1.67a.5.5 0 1 1-.948-.316c.19-.57.63-1.392 1.355-2.08C8.113 6.567 9.148 6 10.5 6a.5.5 0 0 1 0 1c-1.048 0-1.846.433-2.43.988m15.86 0c.593.562.952 1.24 1.096 1.67a.5.5 0 0 0 .948-.316c-.19-.57-.631-1.392-1.355-2.08C23.887 6.567 22.852 6 21.5 6a.5.5 0 1 0 0 1c1.049 0 1.847.433 2.432.988M14 22a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFlushedFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
