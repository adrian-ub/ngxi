import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDataweaveIcon],svg[file-icons-dataweave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408.836 54.191L179.538 381.697L53.318 201.416l49.846-71.113l99.54 142.181L256 196.33l-26.659-38.057l-26.637 38.057l-99.54-142.138L0 201.416l179.538 256.393l229.298-327.506l49.846 71.113l-126.22 180.28l-23.144-33.077l-26.66 38.077l49.804 71.113L512 201.416z"></svg:path>`,
})
export class FileIconsDataweaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
