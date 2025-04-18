import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHotSurfaceIcon],svg[game-icons-hot-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 53.5c45 150-45 150 0 300h60c-45-150 45-150 0-300zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300zm120 0c45 150-45 150 0 300h60c-45-150 45-150 0-300zm-270 315c-15 0-30 30-30 30c-30 0-30 0-30 30v30h480v-30c0-30 0-30-30-30c0 0-15-30-30-30c-30 0-30 45-60 45s-30-45-60-45s-30 45-60 45s-30-45-60-45s-30 45-60 45s-30-45-60-45"></svg:path>`,
})
export class GameIconsHotSurfaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
