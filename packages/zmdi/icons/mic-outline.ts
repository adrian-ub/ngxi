import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMicOutlineIcon],svg[zmdi-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.5 261q-26.5 0-45.5-18.5T85 197V69q0-26 19-45t45.5-19t45 19T213 69v128q0 27-18.5 45.5t-45 18.5M124 67v132q0 11 7.5 18.5t18 7.5t18-7.5T175 199V67q0-10-7.5-17.5t-18-7.5t-18 7.5T124 67m138 130h37q0 54-37.5 95T171 341v70h-43v-70q-53-8-90.5-49T0 197h36q0 47 34 78t79.5 31t79-31t33.5-78"></svg:path>`,
})
export class ZmdiMicOutlineIcon {
  readonly viewBox = input("0 0 304 416")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
