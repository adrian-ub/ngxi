import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVolumeMuteIcon],svg[icon-park-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipVolumeMute0" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:rect width="13" height="13" x="30" y="18" fill="#fff"></svg:rect></svg:mask><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:g stroke-linecap="round" mask="url(#ipVolumeMute0)"><svg:path d="M40.7348 20.2858L32.2495 28.7711"></svg:path><svg:path d="M32.2496 20.2858L40.7349 28.7711"></svg:path></svg:g><svg:path fill="#2F88FF" d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkVolumeMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
