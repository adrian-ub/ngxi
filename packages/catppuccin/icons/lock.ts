import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLockIcon],svg[catppuccin-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.744" d="M12.36 7.104c.482 0 .872.39.872.872v5.23c0 .481-.39.871-.872.871H3.639a.87.87 0 0 1-.872-.871v-5.23c0-.482.39-.872.872-.872zm-6.977 0V4.488a2.617 2.617 0 0 1 5.234 0v2.616"></svg:path>`,
})
export class CatppuccinLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
