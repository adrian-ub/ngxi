import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopWatchOffIcon],svg[pepicons-pop-watch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M4.5 10a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 7.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.25 10a.75.75 0 0 1-.75.75H10a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75M7.5 2.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.775 1.538a1 1 0 0 1 .687 1.237l-1 3.5a1 1 0 1 1-1.924-.55l1-3.5a1 1 0 0 1 1.237-.687m0 16.924a1 1 0 0 0 .687-1.237l-1-3.5a1 1 0 1 0-1.924.55l1 3.5a1 1 0 0 0 1.237.687m2.45 0a1 1 0 0 1-.686-1.237l1-3.5a1 1 0 1 1 1.922.55l-1 3.5a1 1 0 0 1-1.236.687m0-16.924a1 1 0 0 0-.686 1.237l1 3.5a1 1 0 1 0 1.922-.55l-1-3.5a1 1 0 0 0-1.236-.687" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.5 17.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopWatchOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
