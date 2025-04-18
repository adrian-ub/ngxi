import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsWirsindhandwerkIcon],svg[fa6-brands-wirsindhandwerk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.772 479.812h83.36V367.847l-83.36 47.01Zm329.046 0h82.35v-64.956l-82.35-47.009Zm.006-448v219.756l-123.648-72.382l-121.672 72.382V31.812H50.772v360.794l205.404-122.287l205.993 122.287V31.812Z"></svg:path>`,
})
export class Fa6BrandsWirsindhandwerkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
