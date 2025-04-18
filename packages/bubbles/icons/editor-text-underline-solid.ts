import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextUnderlineSolidIcon],svg[bubbles-editor-text-underline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.727 2H5.273v8.338c0 1.37.512 2.671 1.406 3.622c.892.948 2.088 1.468 3.321 1.468s2.43-.52 3.322-1.468c.893-.95 1.406-2.253 1.406-3.622V2h-1.455a1 1 0 1 1 0-2h4.909a1 1 0 0 1 0 2h-1.454v8.338c0 1.862-.695 3.658-1.95 4.992c-1.256 1.336-2.973 2.098-4.778 2.098s-3.522-.762-4.778-2.098c-1.254-1.334-1.95-3.13-1.95-4.992V2H1.819a1 1 0 1 1 0-2h4.909a1 1 0 1 1 0 2M1 18a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorTextUnderlineSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
