import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRugIcon],svg[fa6-solid-rug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 0h416v384H112zm528 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"></svg:path>`,
})
export class Fa6SolidRugIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
