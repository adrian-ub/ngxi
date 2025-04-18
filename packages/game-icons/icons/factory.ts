import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFactoryIcon],svg[game-icons-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 64l.387 256H368l-96-128l-16 128l-96-128l-16 128l-96-128l-16 128v160h448V64h-32v256h-32V64zM64 352h48v32H64zm80 0h48v32h-48zm80 0h48v32h-48zm80 0h48v32h-48zM64 416h48v32H64zm80 0h48v32h-48zm80 0h48v32h-48zm80 0h48v32h-48z"></svg:path>`,
})
export class GameIconsFactoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
