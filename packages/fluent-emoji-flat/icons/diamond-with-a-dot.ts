import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDiamondWithADotIcon],svg[fluent-emoji-flat-diamond-with-a-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M11.757 8.929a2 2 0 0 0 0 2.828l3.182 3.182a1.5 1.5 0 0 0 2.122 0l3.182-3.182a2 2 0 0 0 0-2.828L17.06 5.747a1.5 1.5 0 0 0-2.122 0z"></svg:path><svg:path fill="#00A6ED" d="M5.747 14.94a1.5 1.5 0 0 0 0 2.12l3.182 3.183a2 2 0 0 0 2.828 0l3.182-3.182a1.5 1.5 0 0 0 0-2.122l-3.182-3.182a2 2 0 0 0-2.828 0z"></svg:path><svg:path fill="#00A6ED" d="M11.757 20.243a2 2 0 0 0 0 2.828l3.182 3.182a1.5 1.5 0 0 0 2.122 0l3.182-3.182a2 2 0 0 0 0-2.828L17.06 17.06a1.5 1.5 0 0 0-2.122 0z"></svg:path><svg:path fill="#00A6ED" d="M17.06 17.06a1.5 1.5 0 0 1 0-2.12l3.183-3.183a2 2 0 0 1 2.828 0l3.182 3.182a1.5 1.5 0 0 1 0 2.122l-3.182 3.182a2 2 0 0 1-2.828 0z"></svg:path><svg:path fill="#26C9FC" d="M18 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDiamondWithADotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
