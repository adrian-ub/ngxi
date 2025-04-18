import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUmbrellaTwoIcon],svg[icon-park-twotone-umbrella-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUmbrellaTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M27 24v13.125C27 39 26.638 44 23 44c-3.429 0-4-4.375-4-5.625"></svg:path><svg:path fill="#555" d="M24 4c14.5 0 19.375 13.333 20 20H4c.625-6.667 5.5-20 20-20"></svg:path><svg:path d="m19 14l4 4l6-7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUmbrellaTwo0)"></svg:path>`,
})
export class IconParkTwotoneUmbrellaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
