import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGuideLinesMagnetIcon],svg[ix-editor-guide-lines-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 405.335v64h-42.667v-64zm53.333-128c53.02 0 96 42.98 96 96c0 53.019-42.98 96-96 96h-32v-64h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-64zM128 42.668v106.667h42.667V42.668h42.666v106.667h256v42.666h-256v277.334h-42.666V192.001H128v277.334H85.333V192.001H42.667v-42.666h42.666V42.668zm192 234.667v64h-42.667v-64z"></svg:path>`,
})
export class IxEditorGuideLinesMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
