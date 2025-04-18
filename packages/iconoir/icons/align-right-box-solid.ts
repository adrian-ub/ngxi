import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignRightBoxSolidIcon],svg[iconoir-align-right-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.005 20.005l.011-.01m-4.011.01l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m3.989.01l.011-.01"></svg:path><svg:path fill="currentColor" d="M12.005 20.005h8v-16h-8z"></svg:path></svg:g>`,
})
export class IconoirAlignRightBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
