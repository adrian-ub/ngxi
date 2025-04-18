import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFaustIcon],svg[file-icons-faust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.3 0h129.14l113.994 315.825H283.326l-66.602-202.596l-67.277 202.596h-109zm-31.53 449.615c0-47.846-52.151-77.913-93.648-53.99c-41.496 23.924-41.496 84.056 0 107.979s93.649-6.143 93.649-53.99m317.214 0c0-47.846-52.152-77.913-93.649-53.99c-41.496 23.924-41.496 84.056 0 107.979s93.649-6.143 93.649-53.99"></svg:path>`,
})
export class FileIconsFaustIcon {
  readonly viewBox = input("0 0 442 512")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
