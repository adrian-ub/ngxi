import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiExposureAltIcon],svg[zmdi-exposure-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM53 96v32h43v43h32v-43h43V96h-43V53H96v43zm288 245V43L43 341zm-42-42H192v-32h107z"></svg:path>`,
})
export class ZmdiExposureAltIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
