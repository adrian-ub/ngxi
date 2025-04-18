import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopWatchCircleFilledIcon],svg[pepicons-pop-watch-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopWatchCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 9.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M7.5 13a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"></svg:path><svg:path d="M13 10.75a.75.75 0 0 1 .75.75V13a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M15.25 13a.75.75 0 0 1-.75.75H13a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75M10.5 5.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path><svg:path d="M11.775 4.538a1 1 0 0 1 .687 1.237l-1 3.5a1 1 0 1 1-1.924-.55l1-3.5a1 1 0 0 1 1.237-.687m0 16.924a1 1 0 0 0 .687-1.237l-1-3.5a1 1 0 1 0-1.924.55l1 3.5a1 1 0 0 0 1.237.687m2.45 0a1 1 0 0 1-.686-1.237l1-3.5a1 1 0 1 1 1.923.55l-1 3.5a1 1 0 0 1-1.237.687m0-16.924a1 1 0 0 0-.686 1.237l1 3.5a1 1 0 1 0 1.923-.55l-1-3.5a1 1 0 0 0-1.237-.687"></svg:path><svg:path d="M10.5 20.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopWatchCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopWatchCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
