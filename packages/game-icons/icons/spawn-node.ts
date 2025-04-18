import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsSpawnNodeIcon],svg[game-icons-spawn-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 16v30h240V16zm0 60v60h240V76zm0 90v90h240v-90zm0 120v120h240V286zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30z"></svg:path>`,
})
export class GameIconsSpawnNodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
