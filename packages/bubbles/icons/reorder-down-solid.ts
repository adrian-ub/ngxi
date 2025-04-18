import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesReorderDownSolidIcon],svg[bubbles-reorder-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.833 11.333h-1a.167.167 0 0 1-.166-.166V2a.667.667 0 1 0-1.334 0v9.167a.167.167 0 0 1-.166.166h-1a.5.5 0 0 0-.4.8L12.6 14.58a.508.508 0 0 0 .8 0l1.833-2.447a.501.501 0 0 0-.4-.8M6.667 0H2C1.264 0 .667.597.667 1.333V6c0 .736.597 1.333 1.333 1.333h4.667C7.403 7.333 8 6.736 8 6V1.333C8 .597 7.403 0 6.667 0m0 8.667h-1a.667.667 0 0 0 0 1.333h.666a.333.333 0 0 1 .334.333V11A.667.667 0 1 0 8 11v-1a1.333 1.333 0 0 0-1.333-1.333M7.333 13a.666.666 0 0 0-.666.667v.666a.333.333 0 0 1-.334.334h-.666a.667.667 0 1 0 0 1.333h1A1.334 1.334 0 0 0 8 14.667v-1A.667.667 0 0 0 7.333 13M3 14.667h-.667A.333.333 0 0 1 2 14.333v-.666a.667.667 0 1 0-1.333 0v1A1.333 1.333 0 0 0 2 16h1a.666.666 0 1 0 0-1.333m.667-5.334A.667.667 0 0 0 3 8.667H2A1.333 1.333 0 0 0 .667 10v1A.667.667 0 1 0 2 11v-.667A.333.333 0 0 1 2.333 10H3a.667.667 0 0 0 .667-.667"></svg:path>`,
})
export class BubblesReorderDownSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
