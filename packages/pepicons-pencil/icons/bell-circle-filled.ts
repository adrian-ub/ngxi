import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBellCircleFilledIcon],svg[pepicons-pencil-bell-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilBellCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M11 20a.5.5 0 0 1 1 0a1 1 0 1 0 2 0a.5.5 0 0 1 1 0a2 2 0 1 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M20.5 17.5a2.96 2.96 0 0 0-1.5-2.575V12a5.5 5.5 0 0 0-5.5-5.5h-1A5.5 5.5 0 0 0 7 12v2.925A2.96 2.96 0 0 0 5.5 17.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2M18 15.558l.295.133l.055.024A1.96 1.96 0 0 1 19.5 17.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1c0-.769.45-1.467 1.15-1.784l.055-.025l.295-.133V12a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 18 12z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 4.5a.5.5 0 0 1 1 0V7a.5.5 0 0 1-1 0z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilBellCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilBellCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
