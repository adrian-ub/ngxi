import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBuildingBlockIcon],svg[ix-building-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.737 212.895H85.97v170.083h340.767zm0-42.521h42.596l-.707 256.292H42.666V170.375H85.97V85.333h127.788v85.042h85.192V85.333h127.787zm-42.596.001v-42.521h-43.344v42.521zm-255.575 0h42.596v-42.521h-42.596z" clip-rule="evenodd"></svg:path>`,
})
export class IxBuildingBlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
