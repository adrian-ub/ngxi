import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFillAccent32LightIcon],svg[fluent-color-fill-accent-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.797 19.5c-.148.415-.297.948-.297 1.5a4.5 4.5 0 1 0 9 0c0-.395-.076-.78-.174-1.12A2.5 2.5 0 0 1 28.5 22v4a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-4A2.5 2.5 0 0 1 6 19.5h.438l2.606 2.605a4.75 4.75 0 0 0 6.717 0l2.606-2.605z"></svg:path>`,
})
export class FluentColorFillAccent32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
