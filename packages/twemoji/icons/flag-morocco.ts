import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMoroccoIcon],svg[twemoji-flag-morocco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C1272D" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#006233" d="m15.047 22.165l1.128-3.471l-2.953-2.145h3.649L18 13.074l1.129 3.474h3.649l-2.953 2.145l1.128 3.471L18 20.019zm3.583-2.603l.916.665l-.35-1.077zm-1.826-.412l-.35 1.077l.916-.665zm.241-.74l.955.694l.955-.694l-.365-1.122h-1.182zM15.5 17.288l.915.665l.216-.665zm3.869 0l.216.665l.915-.665zm-1.019-.74L18 15.47l-.35 1.079h.7z"></svg:path>`,
})
export class TwemojiFlagMoroccoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
