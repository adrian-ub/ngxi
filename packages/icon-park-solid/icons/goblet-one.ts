import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGobletOneIcon],svg[icon-park-solid-goblet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSGobletOne0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSGobletOne1)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5.736 24.121l4.95 4.95c5.077 5.077 13.308 5.077 18.385 0v0c5.077-5.077 5.077-13.308 0-18.385l-4.95-4.95"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m30 30l6 6"></svg:path><svg:ellipse cx="14" cy="14" rx="13" ry="7" transform="rotate(-45 14 14)"></svg:ellipse><svg:ellipse cx="38" cy="38" rx="6" ry="3" transform="rotate(-45 38 38)"></svg:ellipse></svg:g><svg:defs><svg:clippath id="ipSGobletOne1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGobletOne0)"></svg:path>`,
})
export class IconParkSolidGobletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
