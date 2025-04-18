import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSushiIcon],svg[bx-sushi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C7.51 2 4 4.2 4 7v10c0 2.8 3.51 5 8 5s8-2.2 8-5V7c0-2.8-3.51-5-8-5m0 18c-3.54 0-6-1.58-6-3v-6.67A10.5 10.5 0 0 0 12 12a10.5 10.5 0 0 0 6-1.67V17c0 1.42-2.46 3-6 3m0-10c-3.54 0-6-1.58-6-3s2.46-3 6-3s6 1.58 6 3s-2.46 3-6 3"></svg:path><svg:ellipse cx="12" cy="7" fill="currentColor" rx="3" ry="1.71"></svg:ellipse>`,
})
export class BxSushiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
