import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMonstersincIcon],svg[whh-monstersinc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m704 768l-43-192l-53 192H416l-53-192l-43 192H0L128 0h320l64 192q-93 0-170.5 52.5T224 384q40 87 117.5 139.5T512 576t170.5-52.5T800 384q-40-87-117.5-139.5T512 192L576 0h320l128 768zM512 512q-53 0-90.5-37.5T384 384t37.5-90.5T512 256t90.5 37.5T640 384t-37.5 90.5T512 512"></svg:path>`,
})
export class WhhMonstersincIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
