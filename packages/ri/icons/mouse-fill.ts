import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMouseFillIcon],svg[ri-mouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.141 2h1.718c2.014 0 3.094.278 4.071.801A5.45 5.45 0 0 1 19.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071a5.45 5.45 0 0 1-2.27 2.269c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801A5.45 5.45 0 0 1 4.8 18.931c-.522-.977-.8-2.057-.8-4.071V9.14c0-2.014.278-3.094.801-4.072A5.45 5.45 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2M11 6v5h2V6z"></svg:path>`,
})
export class RiMouseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
