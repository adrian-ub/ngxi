import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFlamerIcon],svg[game-icons-flamer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 121c0 90 90 105 90 180c0 30-30 75-75 75s-75-45-45-120c-45 30-60 60-60 90c0 75 75 150 180 150s180-45 180-135c.67-133.125-153.4-177.596-195-240c-30-45-15-75 15-105c-60 15-90 57-90 105"></svg:path>`,
})
export class GameIconsFlamerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
