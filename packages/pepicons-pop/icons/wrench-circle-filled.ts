import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopWrenchCircleFilledIcon],svg[pepicons-pop-wrench-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopWrenchCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="m20.562 16.571l-5.303-6.319a4 4 0 0 0-.224-.243c.22-1.408-.194-2.902-1.174-4.07c-1.308-1.558-3.359-2.214-5.19-1.68a1 1 0 0 0-.487 1.603l1.741 2.075l-.58.488L7.602 6.35a1 1 0 0 0-1.663.2c-.844 1.712-.554 3.845.754 5.404c.966 1.151 2.342 1.817 3.748 1.861q.102.153.221.294l5.302 6.319a3 3 0 1 0 4.597-3.857M8.226 10.67a3.3 3.3 0 0 1-.656-1.247l.242.288a2 2 0 0 0 2.818.247l.581-.488a2 2 0 0 0 .246-2.817l-.242-.29a3.3 3.3 0 0 1 1.114.863c.705.84.932 1.933.639 2.87a1 1 0 0 0 .416 1.142q.195.124.343.3l5.303 6.32a1 1 0 0 1-1.532 1.285l-5.303-6.319a1.5 1.5 0 0 1-.242-.404a1 1 0 0 0-1.045-.62c-.964.114-1.986-.3-2.682-1.13" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopWrenchCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopWrenchCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
