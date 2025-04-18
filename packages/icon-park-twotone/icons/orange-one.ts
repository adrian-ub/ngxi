import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOrangeOneIcon],svg[icon-park-twotone-orange-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOrangeOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M34.15 34.85c8.202-8.202 8.202-21.498 0-29.7L4.453 34.85c8.201 8.2 21.498 8.2 29.699 0"></svg:path><svg:path d="m19.301 20l14.85 14.85M19.302 20v21.213m0-21.213l20.506.707m-.053-5.71c1.664 6.88-.189 14.437-5.56 19.808c-5.372 5.372-12.93 7.225-19.809 5.56m-.034-15.415l8.485-8.486"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOrangeOne0)"></svg:path>`,
})
export class IconParkTwotoneOrangeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
