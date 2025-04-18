import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDashlaneIcon],svg[arcticons-dashlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.483 5.976l-4.738-1.432a1.025 1.025 0 0 0-1.322.982v35.517c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.322-.981V6.957c0-.452-.297-.85-.73-.981"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.271 5.976l-4.738-1.432a1.025 1.025 0 0 0-1.321.982v9.787c0 .452.296.85.728.982l4.738 1.43a1.025 1.025 0 0 0 1.322-.98V6.956c0-.452-.296-.85-.729-.981m0 25.73l-4.738-1.43a1.025 1.025 0 0 0-1.321.98v9.788c0 .452.296.85.728.981l4.738 1.431A1.025 1.025 0 0 0 24 42.474v-9.787c0-.452-.296-.851-.729-.982M30.06 9.75l-4.738-1.43A1.025 1.025 0 0 0 24 9.3v9.788c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.321-.981v-9.787c0-.452-.296-.851-.728-.982"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.06 29.63l-4.738-1.432A1.025 1.025 0 0 0 24 29.18v9.787c0 .452.296.85.729.981l4.738 1.431a1.025 1.025 0 0 0 1.321-.981V30.61c0-.452-.296-.851-.728-.982m6.788-13.883l-4.738-1.43a1.025 1.025 0 0 0-1.322.98V33.84c0 .452.296.85.73.981l4.737 1.431a1.025 1.025 0 0 0 1.322-.981V16.727c0-.452-.296-.851-.729-.982"></svg:path>`,
})
export class ArcticonsDashlaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
