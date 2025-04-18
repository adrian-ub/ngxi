import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFaceWithOpenEyesAndHandOverMouthIcon],svg[fluent-emoji-flat-face-with-open-eyes-and-hand-over-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#fff" d="M14.999 14.498a4.5 4.5 0 1 1-9.001 0a4.5 4.5 0 0 1 9 0m2 0a4.5 4.5 0 1 0 9.001 0a4.5 4.5 0 0 0-9.001 0"></svg:path><svg:path fill="#402A32" d="M14 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path fill="#FF822D" d="M17.132 17.459a1.355 1.355 0 0 0-1.868-.158l-3.503 2.849l.295-1.025c.205-.711-.224-1.449-.958-1.647c-.737-.2-1.502.22-1.702.938l-.812 2.901l-.986 2.3a2 2 0 0 0-.048.128a4.65 4.65 0 0 0-.55 2.2c0 2.6 2.128 4.709 4.753 4.709a4.76 4.76 0 0 0 3.037-1.087l5.285-3.767c.62-.442.744-1.29.275-1.882a1.37 1.37 0 0 0-.789-.489l.502-.408a1.316 1.316 0 0 0 .171-1.895a1.4 1.4 0 0 0-.783-.452l.154-.126a1.316 1.316 0 0 0 .171-1.894a1.42 1.42 0 0 0-1.955-.166l-.572.465a1.25 1.25 0 0 0-.117-1.494"></svg:path><svg:path fill="#402A32" d="M10.775 7a.75.75 0 0 0-.05-1.5C7.674 5.603 6 8.163 6 10.25a.75.75 0 0 0 1.5 0c0-1.413 1.161-3.18 3.275-3.25m10.95 0a.75.75 0 0 1 .05-1.5c3.051.103 4.725 2.663 4.725 4.75a.75.75 0 0 1-1.5 0c0-1.413-1.161-3.18-3.275-3.25"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFaceWithOpenEyesAndHandOverMouthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
