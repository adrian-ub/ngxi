import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSushiIcon],svg[bxs-sushi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12.07" cy="7" fill="currentColor" rx="3" ry="1.71"></svg:ellipse><svg:path fill="currentColor" d="M12.07 22c4.48 0 8-2.2 8-5V7c0-2.8-3.52-5-8-5s-8 2.2-8 5v10c0 2.8 3.51 5 8 5m0-18c3.53 0 6 1.58 6 3a2 2 0 0 1-.29.87c-.68 1-2.53 2-5 2.12h-1.39C8.88 9.83 7 8.89 6.35 7.84a2.2 2.2 0 0 1-.28-.76V7c0-1.42 2.46-3 6-3"></svg:path>`,
})
export class BxsSushiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
