import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGlassWaterDropletSolidIcon],svg[flowbite-glass-water-droplet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6c-.268 0-.46.105-.525.143c-.086.05-.151.103-.19.137a2 2 0 0 0-.194.2c-.1.12-.21.268-.317.425c-.219.32-.479.745-.729 1.199c-.249.454-.5.957-.69 1.433C9.178 9.977 9 10.518 9 11a3 3 0 1 0 6 0c0-.482-.178-1.023-.355-1.463c-.19-.476-.441-.98-.69-1.433c-.25-.454-.51-.879-.729-1.199a5 5 0 0 0-.317-.425a2 2 0 0 0-.194-.2a1.2 1.2 0 0 0-.19-.137A1.05 1.05 0 0 0 12 6"></svg:path><svg:path fill-rule="evenodd" d="M6 2a1 1 0 0 0-.998 1.067L6.078 19.2A3 3 0 0 0 9.07 22h5.858a3 3 0 0 0 2.993-2.8l1.076-16.133A1 1 0 0 0 18 2zm1.869 14l-.8-12h9.862l-.8 12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteGlassWaterDropletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
