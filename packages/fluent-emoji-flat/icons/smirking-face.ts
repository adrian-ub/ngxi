import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSmirkingFaceIcon],svg[fluent-emoji-flat-smirking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M6 13.5q0-.254.027-.5h4.004l2.301.923L14.464 13h.508q.028.246.028.5a4.5 4.5 0 1 1-9 0m11 0q0-.254.027-.5h4.014l2.24.712L25.449 13h.524q.028.246.028.5a4.5 4.5 0 1 1-9 0"></svg:path><svg:path fill="#402A32" d="M10 13.25q0-.127.014-.25h4.472q.015.123.014.25a2.25 2.25 0 0 1-2.25 2.25A2.26 2.26 0 0 1 10 13.25m11 0q0-.127.014-.25h4.472q.015.123.014.25a2.25 2.25 0 0 1-2.25 2.25A2.26 2.26 0 0 1 21 13.25M8.07 7.988c-.594.562-.952 1.24-1.096 1.67a.5.5 0 1 1-.948-.316c.19-.57.63-1.392 1.355-2.08C8.113 6.567 9.148 6 10.5 6a.5.5 0 0 1 0 1c-1.048 0-1.846.433-2.43.988m15.86 0c.594.562.952 1.24 1.096 1.67a.5.5 0 1 0 .948-.316c-.19-.57-.63-1.392-1.355-2.08C23.887 6.567 22.852 6 21.5 6a.5.5 0 0 0 0 1c1.048 0 1.846.433 2.43.988m.017 13.274a1 1 0 1 0-1.894-.644a5.337 5.337 0 0 1-6.788 3.326a1 1 0 1 0-.65 1.892a7.337 7.337 0 0 0 9.332-4.574"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSmirkingFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
