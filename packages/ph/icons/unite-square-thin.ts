import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareThinIcon],svg[ph-unite-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-62.34 120L44 102.34V49.66L206.34 212Zm-104-168h52.68L212 153.66v52.68ZM212 142.34L169.66 100H212Zm-56-56L113.66 44H156ZM44 113.66L86.34 156H44Zm56 56L142.34 212H100Z"></svg:path>`,
})
export class PhUniteSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
