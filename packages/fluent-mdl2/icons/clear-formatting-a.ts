import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClearFormattingAIcon],svg[fluent-mdl2-clear-formatting-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m640 0l329 988l-105 105l-65-197H353l-85 256H128L512 0zM396 768h360L576 228z"></svg:path>`,
})
export class FluentMdl2ClearFormattingAIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
