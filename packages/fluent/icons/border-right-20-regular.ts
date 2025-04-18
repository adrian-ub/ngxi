import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderRight20RegularIcon],svg[fluent-border-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm1.053 2.96a2 2 0 0 0 1.486 1.487l.063.008a.51.51 0 0 1 .4.592a.51.51 0 0 1-.664.38a3 3 0 0 1-2.265-2.265a.51.51 0 0 1 .38-.663a.51.51 0 0 1 .6.462m10.609 2.467a.503.503 0 0 1-.664-.38a.51.51 0 0 1 .463-.6A2 2 0 0 0 16 14V6a2 2 0 0 0-1.54-1.947l-.062-.008a.51.51 0 0 1-.4-.592a.51.51 0 0 1 .664-.38A3 3 0 0 1 17 6v8c0 1.43-1 2.625-2.338 2.927M3.054 5.41l.02-.072a3 3 0 0 1 2.264-2.265a.51.51 0 0 1 .663.38a.51.51 0 0 1-.462.6A2 2 0 0 0 4.053 5.54a.51.51 0 0 1-.6.462a.51.51 0 0 1-.4-.591M12 3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5M11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentBorderRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
