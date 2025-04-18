import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsHealingShieldIcon],svg[game-icons-healing-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 21.98c-64 48-128 68-224.03 100.02C31.97 234 112 394 256 490c144-96 224-250 224-362c-96-32.02-160-58.02-224-106.02M229 128h54v101h101v54H283v101h-54V283H128v-54h101z"></svg:path>`,
})
export class GameIconsHealingShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
