import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTriggerHurtIcon],svg[game-icons-trigger-hurt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254.25 121.03A60 60 0 0 0 196 181a60 60 0 0 0 120 0a60 60 0 0 0-61.75-59.97M136 271l-60 60H46c-15 0-30 15-30 30v30h480v-30c0-15-15-30-30-30h-30l-60-60l-60 60l-60-60l-60 60z"></svg:path>`,
})
export class GameIconsTriggerHurtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
