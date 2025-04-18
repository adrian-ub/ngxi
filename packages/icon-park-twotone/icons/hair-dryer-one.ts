import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHairDryerOneIcon],svg[icon-park-twotone-hair-dryer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHairDryerOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path d="M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18s-4.659 9.399-9.918 8.72l-20.945-2.702a.16.16 0 0 1-.137-.156z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 12L4 8v20l7-4"></svg:path><svg:path d="m38 25l-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25"></svg:path><svg:circle cx="35" cy="18" r="9" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHairDryerOne0)"></svg:path>`,
})
export class IconParkTwotoneHairDryerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
