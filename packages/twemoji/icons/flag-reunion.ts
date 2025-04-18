import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagReunionIcon],svg[twemoji-flag-reunion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#36F" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="red" d="M18 18L1.368 30.012l.001.001A3.98 3.98 0 0 0 4 31h28a3.98 3.98 0 0 0 2.632-.988z"></svg:path><svg:path fill="#FF0" d="m18 18.019l18 1.487v-2.975zM0 16.531v2.975l18-1.487zm2.405-11.2A4 4 0 0 0 .404 7.247L18 18L2.406 5.33zm33.191 1.916a4.02 4.02 0 0 0-2.003-1.917L18 18zM19.5 5h-3L18 18z"></svg:path>`,
})
export class TwemojiFlagReunionIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
