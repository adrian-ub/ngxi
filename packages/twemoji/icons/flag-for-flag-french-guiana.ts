import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagFrenchGuianaIcon],svg[twemoji-flag-for-flag-french-guiana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#078930" d="M32 5H4a3.965 3.965 0 0 0-2.618.998L16.228 16.72h.828L18 13.814l.944 2.906H22l-2.472 1.796l.249.767l14.841 10.718A3.97 3.97 0 0 0 36 27V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#FCDD09" d="M20.472 21.422L18 19.626l-2.472 1.796l.944-2.906L14 16.72h2.228L1.382 5.998A3.973 3.973 0 0 0 0 9v18a4 4 0 0 0 4 4h28a3.965 3.965 0 0 0 2.618-.998L19.777 19.284l.695 2.138z"></svg:path><svg:path fill="#DA121A" d="M16.472 18.516l-.944 2.906L18 19.626l2.472 1.796l-.695-2.138l-.249-.768L22 16.72h-3.056L18 13.814l-.944 2.906H14z"></svg:path>`,
})
export class TwemojiFlagForFlagFrenchGuianaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
