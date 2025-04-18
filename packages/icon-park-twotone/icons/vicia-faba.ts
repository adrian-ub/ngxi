import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneViciaFabaIcon],svg[icon-park-twotone-vicia-faba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTViciaFaba0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M4 31c0-6.5 4-8.963 7-9.981S16 20 19 17s3-9 9-11s13.091 1 15 8c1.908 7-3.5 16-6 19s-7.501 8-16 9c-8.5 1-17-4.5-17-11Z"></svg:path><svg:path stroke-linecap="round" d="M12 21.044c7 8.956 17 0 10-9.044"></svg:path><svg:path stroke-linecap="round" d="M11 21.019C14 20 16 20 19 17s3-9 9-11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTViciaFaba0)"></svg:path>`,
})
export class IconParkTwotoneViciaFabaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
