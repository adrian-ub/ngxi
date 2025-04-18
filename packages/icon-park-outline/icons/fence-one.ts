import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFenceOneIcon],svg[icon-park-outline-fence-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 4v40m36-32H4m36 32L8 12m0 32l32-32M27 44L8 25m32 6L21 12M8 31l18-19m-5 32l19-19m4 19H4M40 4v40"></svg:path>`,
})
export class IconParkOutlineFenceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
