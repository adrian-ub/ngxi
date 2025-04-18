import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGymnasticsIcon],svg[icon-park-twotone-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGymnastics0"><svg:g fill="none" stroke="#fff" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#555" d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 29l-2 7l-9-2l-5 10m14-8l2 8h11M7 23l16 6l12-2l6.04-4.97M12 4c14-2 24 2 32 11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGymnastics0)"></svg:path>`,
})
export class IconParkTwotoneGymnasticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
