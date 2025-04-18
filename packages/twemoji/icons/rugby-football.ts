import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRugbyFootballIcon],svg[twemoji-rugby-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M27.746 27.746C20.582 34.91 8.561 37.927 2.93 33.07c-4.857-5.63-1.84-17.652 5.324-24.816S27.44-1.927 33.07 2.93c5.906 7.728 1.84 17.652-5.324 24.816"></svg:path><svg:path fill="#CCD6DD" d="M35.622 8.451c-1.459 5.388-10.211 18.453-24.205 23.633c-1.167.5-1.084 1.999.833 2.166c.696.061 2.673.054 5.093-.086c3.767-1.291 7.488-3.503 10.403-6.418c5.545-5.545 9.229-12.742 7.876-19.295"></svg:path><svg:path fill="#E1E8ED" d="M33.337 3.301c-.089-.124-.173-.249-.267-.371a8.6 8.6 0 0 0-1.45-.983C28.622.589 21.826-.099 12 8c-7.583 6.25-8.778 14.191-8.25 18.917c.203 1.814 2.415 1.387 4.333.917c7.824-1.915 26.619-10.397 25.254-24.533"></svg:path>`,
})
export class TwemojiRugbyFootballIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
