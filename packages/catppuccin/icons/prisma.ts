import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPrismaIcon],svg[catppuccin-prisma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="m8 .5l6.5 12.05l-10 2.95l-3-5zm-3.5 15L8 .5"></svg:path>`,
})
export class CatppuccinPrismaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
