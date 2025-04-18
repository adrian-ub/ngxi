import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsDiggIcon],svg[fa-brands-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81.7 172.3H0v174.4h132.7V96h-51zm0 133.4H50.9v-92.3h30.8zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3zm81.8 133.4h-30.8v-92.3h30.8zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1zm51.2-133.3h30.8v92.3h-30.8zM153.3 96h51.3v51h-51.3zm0 76.3h51.3v174.4h-51.3z"></svg:path>`,
})
export class FaBrandsDiggIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
