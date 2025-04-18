import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusShieldSolidIcon],svg[streamline-bug-antivirus-shield-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.536c0-.82.68-1.5 1.5-1.5h11c.82 0 1.5.68 1.5 1.5v2.92c-.003 4.127-2.61 7.923-6.46 9.407a1.5 1.5 0 0 1-1.08 0C2.61 12.379.003 8.583 0 4.457v-2.92Zm4.828 3.176q-.042.21-.042.43v.054a.6.6 0 0 0-.094.179H4a.625.625 0 1 0 0 1.25h.786v.232q0 .222.042.431l-.841.841a.625.625 0 1 0 .883.884l.578-.577c.4.393.947.635 1.552.635s1.153-.242 1.552-.635l.578.577a.625.625 0 1 0 .883-.883l-.84-.842q.04-.21.041-.43v-.233H10a.625.625 0 0 0 0-1.25h-.692a.6.6 0 0 0-.094-.179v-.053a2 2 0 0 0-.042-.431l.841-.841a.625.625 0 1 0-.883-.884l-.578.577A2.2 2.2 0 0 0 7 2.929c-.605 0-1.153.242-1.552.635l-.578-.577a.625.625 0 1 0-.883.884l.84.84Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBugAntivirusShieldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
